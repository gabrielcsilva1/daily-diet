import { Container, Description, InfoContainer, Title } from './style'
import { Modal } from 'react-native'
import { useState } from 'react'

import { Tag } from '@/components/ui/Tag'
import { Header } from '@/components/Header'
import { MealFormSheet } from '@/components/MealFormSheet'
import { Button } from '@/components/ui/Button'
import { DeleteMealConfirmModal } from '@/components/DeleteMealConfirmModal'
import { useNavigation } from '@react-navigation/native'

export function MealInfo() {
  const [visibleModal, setVisibleModal] = useState(false)
  const navigation = useNavigation()

  function handleEditMeal() {
    navigation.navigate('edit-meal', { id: '1' })
  }

  return (
    <Container>
      <Header subtitle="Refeição" />
      <MealFormSheet>
        <InfoContainer>
          <Title>X-tudo</Title>
          <Description>Xis completo da lancheria do bairro</Description>
        </InfoContainer>

        <InfoContainer>
          <Title>Data e hora</Title>
          <Description>12/08/2022 às 20:00</Description>
        </InfoContainer>

        <Tag $variant="SUCCESS" />

        <Button.Root
          style={{ marginTop: 'auto', marginBottom: 8 }}
          onPress={() => handleEditMeal()}
        >
          <Button.Icon name="edit" />
          <Button.Label>Editar refeição</Button.Label>
        </Button.Root>

        <Button.Root
          $variant="SECONDARY"
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
          onConfirm={() => null} // TODO: confirm modal
        />
      </Modal>
    </Container>
  )
}
