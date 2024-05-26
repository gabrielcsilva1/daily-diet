import { Container, Description, InfoContainer, Title } from './style';
import { Modal } from 'react-native';
import { useState } from 'react';

import { Tag } from '@/components/Tag';
import { Header } from '@/components/Header';
import { MealFormSheet } from '@/components/MealFormSheet';
import { Button, ButtonIcon, ButtonLabel } from '@/components/Button';
import { DeleteDietModal } from '@/components/DeleteDietModal';
import { useNavigation } from '@react-navigation/native';

export function MealInfo() {
  const [visibleModal, setVisibleModal] = useState(false);
  const navigation = useNavigation();

  function handleEditMeal() {
    navigation.navigate('edit', { id: '1' });
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

        <Button
          style={{ marginTop: 'auto', marginBottom: 8 }}
          onPress={() => handleEditMeal()}
        >
          <ButtonIcon name="edit" />
          <ButtonLabel>Editar refeição</ButtonLabel>
        </Button>

        <Button
          $variant="SECONDARY"
          onPress={() => setVisibleModal(true)}
          style={{ marginBottom: 40 }}
        >
          <ButtonIcon name="trash" />
          <ButtonLabel>Excluir refeição</ButtonLabel>
        </Button>
      </MealFormSheet>

      <Modal
        visible={visibleModal}
        transparent
        onRequestClose={() => setVisibleModal(false)}
      >
        <DeleteDietModal
          onClose={() => setVisibleModal(false)}
          onConfirm={() => null}
        />
      </Modal>
    </Container>
  );
}
