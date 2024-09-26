import { Container, Description, InfoContainer, NameTitle, DateTitle } from './style'
import { Modal } from 'react-native'
import { useEffect, useState } from 'react'

import { Tag } from '@/components/ui/Tag'
import { Header } from '@/components/Header'
import { MealFormSheet } from '@/components/MealFormSheet'
import { Button } from '@/components/ui/Button'
import { DeleteMealConfirmModal } from '@/components/DeleteMealConfirmModal'
import { useNavigation, useRoute } from '@react-navigation/native'
import { deleteMeal } from '@/storage/meal/delete-meal'
import { MealDTO } from '@/dtos/meal-DTO'
import { Loading } from '@/components/ui/Loading'
import { getMealById } from '@/storage/meal/get-meal-by-id'
import { AppError } from '@/error/app-error'
import { showAlert } from '@/utils/show-alert'
import dayjs from 'dayjs'
import { useTheme } from 'styled-components/native'

type RouteParams = {
  id: string
}

export function MealInfo() {
  const [visibleModal, setVisibleModal] = useState(false)
  const { COLORS } = useTheme()
  const [meal, setMeal] = useState<MealDTO | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()

  const route = useRoute()

  const { id } = route.params as RouteParams

  function handleEditMeal() {
    navigation.navigate('edit-meal', { id })
  }

  async function handleDeleteMeal() {
    try {
      setIsLoading(true)
      await deleteMeal(id)
      showAlert({
        title: 'Refeição deletada',
        message: 'Refeição deletada com sucesso', 
        onPress: () => {
          navigation.goBack()
      }})
    } catch(error) {
      showAlert({title: 'Ocorreu um erro', message: 'Erro ao deletar a refeição'})
      setIsLoading(false)
    }
  }

  async function fetchMeal() {
    try {
      const response = await getMealById(id)
      setMeal(response)
    } catch (error) {
      if (error instanceof AppError) {
        showAlert({ title: 'Ocorreu um erro', message: error.message })
      }
      else {
        showAlert({ title: 'Ocorreu um erro', message: 'Erro ao encontrar a refeição' })
      }
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [])

  if (!meal) {
    return <Loading/>
  }

  return (
    <Container style={{backgroundColor: meal.isOnDiet ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT}}>
      <Header subtitle="Refeição" /> 
      <MealFormSheet> 
        <InfoContainer>
          <NameTitle>{meal.name}</NameTitle>
          <Description>{meal.description}</Description>
        </InfoContainer>

        <InfoContainer>
          <DateTitle>Data e hora</DateTitle>
          <Description>{dayjs(meal.date).format('DD/MM/YYYY [às] HH:mm')}</Description>
        </InfoContainer>

        <Tag $variant={meal.isOnDiet ? 'SUCCESS' : 'DANGER'} />

        <Button.Root
          isLoading={isLoading}
          style={{ marginTop: 'auto', marginBottom: 8 }}
          onPress={() => handleEditMeal()}
        >
          <Button.Icon name="edit" />
          <Button.Label>Editar refeição</Button.Label>
        </Button.Root>

        <Button.Root
          $variant="SECONDARY"
          isLoading={isLoading}
          onPress={() => setVisibleModal(true)}
          style={{ marginBottom: 40 }}
        >
          <Button.Icon name="trash" />
          <Button.Label>Excluir refeição</Button.Label>
        </Button.Root>
      </MealFormSheet>

      <Modal
        visible={visibleModal}
        transparent
        onRequestClose={() => setVisibleModal(false)}
      >
        <DeleteMealConfirmModal
          onClose={() => setVisibleModal(false)}
          onConfirm={handleDeleteMeal}
        />
      </Modal>
    </Container>
  )
}
