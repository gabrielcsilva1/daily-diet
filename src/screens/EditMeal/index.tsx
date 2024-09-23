import { Container, RowContainer } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { View } from 'react-native'

import { Header } from '@/components/Header'
import { FormInput } from '@/components/ui/FormInput'
import { Label } from '@/components/ui/FormInput/style'
import { OptionButton } from '@/components/ui/OptionButton'
import { Button, ButtonLabel } from '@/components/ui/Button'
import { MealFormSheet } from '@/components/MealFormSheet'

export function EditMeal() {
  return (
    <Container>
      <Header subtitle="Editar refeição" />
      <MealFormSheet>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            gap: 24,
            marginBottom: 40,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <FormInput label="Nome" />
          <FormInput label="Descrição" numberOfLines={5} />

          <RowContainer style={{ gap: 20 }}>
            <FormInput style={{ flex: 1 }} label="Data" />
            <FormInput style={{ flex: 1 }} label="Hora" />
          </RowContainer>

          <View>
            <Label>Está dentro da dieta?</Label>
            <RowContainer style={{ gap: 8 }}>
              <OptionButton title="Sim" variant="PRIMARY" />
              <OptionButton title="Não" variant="SECONDARY" />
            </RowContainer>
          </View>
          <Button style={{ marginTop: 'auto' }}>
            <ButtonLabel>Salvar alterações</ButtonLabel>
          </Button>
        </KeyboardAwareScrollView>
      </MealFormSheet>
    </Container>
  )
}
