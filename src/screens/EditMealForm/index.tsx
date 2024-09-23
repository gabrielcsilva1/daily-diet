import { Container, RowContainer } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Header } from '@/components/Header'
import { FormInput } from '@/components/ui/FormInput'
import { Button } from '@/components/ui/Button'
import { MealFormSheet } from '@/components/MealFormSheet'

export function EditMealForm() {
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

          {/* <OnDietOptionButtons/> */}

          <Button.Root style={{ marginTop: 'auto' }}>
            <Button.Label>Salvar alterações</Button.Label>
          </Button.Root>
        </KeyboardAwareScrollView>
      </MealFormSheet>
    </Container>
  )
}
