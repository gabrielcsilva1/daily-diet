import { SectionList } from 'react-native'

import {
  Avatar,
  Container,
  DietStatus,
  DietStatusButton,
  DietStatusVariantsProps,
  HomeHeader,
  Label,
  Logo,
  Separator,
  SectionHeaderText,
} from './style'

import { Button } from '@/components/ui/Button'
import { MealCard } from '@/components/ui/MealCard'
import { Highlight } from '@/components/ui/Highlight'
import { ArrowIcon } from '@/components/ui/ArrowIcon'

import logoImg from '@/assets/logo.png'
import avatarImg from '@/assets/avatar.png'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { useCallback, useState } from 'react'
import { MealsHistoryDTO } from '@/dtos/meals-history-DTO'
import { getMealsHistory } from '@/storage/meal/get-meals-history'
import { Loading } from '@/components/ui/Loading'
import { getStatistics } from '@/storage/meal/get-statistics'

export function Home() {
  const [history, setHistory] = useState<MealsHistoryDTO>([])
  const [isLoading, setIsLoading] = useState(false)
  const [inDietPercentage, setInDietPercentage] = useState(0)

  const navigation = useNavigation()
  const dietStatus: DietStatusVariantsProps = inDietPercentage >= 50 ? 'SUCCESS' : 'DANGER'

  function handleOpenDietStats() {
    navigation.navigate('diet-stats')
  }

  function handleOpenMealInfo() {
    navigation.navigate('meal-info', { id: '1' })
  }

  function handleCreateNewMeal() {
    navigation.navigate('create-meal')
  }

  async function fetchMealsHistory() {
    const historyStorage = await getMealsHistory()

    setHistory(historyStorage)
  }

  async function fetchStatistics() {
      const {percentage} = await getStatistics()

      setInDietPercentage(percentage)
  }

  async function fetchAllData() {
    try {
      setIsLoading(true)
      await Promise.all([fetchMealsHistory(), fetchStatistics()])
    } catch (error) {
      console.log('Erro') // TODO: Usar um alert
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchAllData()
    }, [])
  )

  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HomeHeader>

      <DietStatus $variant={dietStatus}>
        <Highlight title={`${inDietPercentage.toFixed(2)}%`} label="das refeições dentro da dieta" />

        <DietStatusButton activeOpacity={0.7} onPress={handleOpenDietStats}>
          <ArrowIcon name="arrow-up-right" $variant={dietStatus} />
        </DietStatusButton>
      </DietStatus>

      <Label>Refeições</Label>

      <Button.Root 
      onPress={handleCreateNewMeal} 
      disabled={isLoading}
      isLoading={isLoading}
      > 
        <Button.Icon name="plus" />
        <Button.Label>Nova refeição</Button.Label>
      </Button.Root>

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={history}
          keyExtractor={(meal) => meal.id}
          style={{ marginTop: 32 }}
          renderItem={({ item }) => (
            <MealCard
              onPress={() => handleOpenMealInfo()}
              time={item.time}
              label={item.name}
              $variant={item.isOnDiet ? 'SUCCESS' : 'DANGER'}
            />
          )}
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({ section }) => (
            <SectionHeaderText>{section.title}</SectionHeaderText>
          )}
          contentContainerStyle={{ gap: 8, paddingBottom: 80 }}
          renderSectionFooter={() => <Separator />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  )
}
