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

import { Button, ButtonIcon, ButtonLabel } from '@/components/ui/Button'
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

export function Home() {
  const [history, setHistory] = useState<MealsHistoryDTO>([])
  const [isLoading, setIsLoading] = useState(false)

  const navigation = useNavigation()
  const dietStatus: DietStatusVariantsProps = 3 > 2 ? 'SUCCESS' : 'DANGER'

  function handleOpenDietStats() {
    navigation.navigate('diet-stats')
  }

  function handleOpenMealInfo() {
    navigation.navigate('info', { id: '1' })
  }

  function handleCreateNewMeal() {
    navigation.navigate('new')
  }

  async function fetchMealsHistory() {
    try {
      setIsLoading(true)
      const historyStorage = await getMealsHistory()

      setHistory(historyStorage)
    } catch (error) {
      console.log('Erro ao buscar as refeições') // TODO: add alert
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMealsHistory()
    }, [])
  )

  return (
    <Container>
      <HomeHeader>
        <Logo source={logoImg} />

        <Avatar source={avatarImg} />
      </HomeHeader>

      <DietStatus $variant={dietStatus}>
        <Highlight title="90,86%" label="das refeições dentro da dieta" />

        <DietStatusButton activeOpacity={0.7} onPress={handleOpenDietStats}>
          <ArrowIcon name="arrow-up-right" $variant={dietStatus} />
        </DietStatusButton>
      </DietStatus>

      <Label>Refeições</Label>
      <Button onPress={handleCreateNewMeal}>
        <ButtonIcon name="plus" />
        <ButtonLabel>Nova refeição</ButtonLabel>
      </Button>

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
