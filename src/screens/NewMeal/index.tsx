import { Container, HorizontalContainer, Label } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { View } from 'react-native'

import { Header } from '@/components/Header'
import { FormInput } from '@/components/ui/FormInput'
import { OptionButton } from '@/components/ui/OptionButton'
import { Button, ButtonLabel } from '@/components/ui/Button'
import { MealFormSheet } from '@/components/MealFormSheet'

import { useForm, Controller } from 'react-hook-form'
import { TextArea } from '@/components/ui/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { OnDietOptionButtons } from '@/components/OnDietOptionButtons'
import { createMeal } from '@/storage/meal/create-meal'

const mealFormSchema = z.object({
  name: z.string({ message: 'Por favor forneça o nome' }),
  description: z.string({ message: 'Por favor forneça a descrição' }),
  date: z.string({ message: 'Por favor forneça a data' }),
  time: z.string({ message: 'Por favor forneça a hora' }),
  isOnDiet: z.boolean(),
})

type MealFormType = z.infer<typeof mealFormSchema>

export function NewMeal() {
  const { control, handleSubmit, formState: { errors }} = useForm<MealFormType>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: {
      isOnDiet: true
    }
  })

  async function handleCreateMeal(data: MealFormType) {
    // TODO: Usar uma biblioteca para data e hora
    const [day, month, year] = data.date.split('/').map((item) => Number(item))
    const [hour, minutes] = data.time.split(':').map((item) => Number(item))

    const date = new Date(year, month, day, hour, minutes)
    
    try {
      await createMeal({
        id: String(new Date().valueOf()),
        name: data.name,
        description: data.description,
        date: date.toISOString(),
        isOnDiet: data.isOnDiet
      })
    }
    catch (error) {
      console.log(error) // TODO: Usar o alert
    }
  }
  
  return (
    <Container>
      <Header subtitle="Nova refeição" />
      <MealFormSheet>
        <KeyboardAwareScrollView
          contentContainerStyle={{
            gap: 24,
            marginBottom: 40,
            flexGrow: 1,
          }}
          showsVerticalScrollIndicator={false}
        >
          <Controller
            control={control}
            name="name"
            render={({ field: { onChange, value } }) => (
              <FormInput
                label="Nome"
                value={value}
                onChangeText={onChange}
                error={errors.name?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="description"
            render={({ field: { onChange, value } }) => (
              <TextArea
                label="Descrição"
                value={value}
                onChangeText={onChange}
                error={errors.description?.message}
              />
            )}
          />

          <HorizontalContainer style={{ gap: 20 }}>
            <Controller
              control={control}
              name="date"
              render={({ field: { onChange, value } }) => (
                <FormInput
                  label="Data"
                  value={value}
                  onChangeText={onChange}
                  error={errors.date?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="time"
              render={({ field: { onChange, value } }) => (
                <FormInput
                  label="Hora"
                  value={value}
                  onChangeText={onChange}
                  error={errors.time?.message}
                />
              )}
            />
          </HorizontalContainer>
          
          <Controller
              control={control}
              name="isOnDiet"
              render={({ field: { onChange, value } }) => (
                <OnDietOptionButtons
                  value={value}
                  onChange={onChange}
                />
              )}
            />

          <Button style={{ marginTop: 'auto' }} onPress={handleSubmit(handleCreateMeal)}>
            <ButtonLabel>Cadastrar refeição</ButtonLabel>
          </Button>
        </KeyboardAwareScrollView>
      </MealFormSheet>
    </Container>
  )
}
