import { Container } from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { Header } from '@/components/Header'
import { FormInput } from '@/components/ui/FormInput'
import { Button } from '@/components/ui/Button'
import { MealFormSheet } from '@/components/MealFormSheet'

import { useForm, Controller } from 'react-hook-form'
import { TextArea } from '@/components/ui/TextArea'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { OnDietOptionButtons } from '@/components/OnDietOptionButtons'
import { createMeal } from '@/storage/meal/create-meal'
import { DateTimeInputs } from '@/components/DateTimeInputs'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { showAlert } from '@/utils/show-alert'

const mealFormSchema = z.object({
  name: z.string({ message: 'Por favor forneça o nome' }),
  description: z.string({ message: 'Por favor forneça a descrição' }),
  date: z.date({ message: 'Por favor forneça a data' }),
  isOnDiet: z.boolean(),
})

type MealFormType = z.infer<typeof mealFormSchema>

export function CreateMealForm() {
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors }} = useForm<MealFormType>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: {
      date: new Date(),
      isOnDiet: true
    }
  })

  async function handleCreateMeal(data: MealFormType) {

    try {
      setIsLoading(true)
      
      await createMeal({
        id: String(new Date().valueOf()),
        name: data.name,
        description: data.description,
        date: data.date.toISOString(),
        isOnDiet: data.isOnDiet
      })

      if (data.isOnDiet) {
        navigation.navigate('positive-feedback')
      }
      else {
        navigation.navigate('negative-feedback')
      }
    }
    catch (error) {
      setIsLoading(false)
      showAlert({title: 'Ocorreu um erro!', message: 'Error ao cadastrar o refeição'})
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

          <Controller
            control={control}
            name='date'
            render={({field: {value, onChange}}) => (
              <DateTimeInputs value={value} onChange={onChange}/>
            )}
          />
          
          
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

          <Button.Root 
          style={{ marginTop: 'auto' }} 
          onPress={handleSubmit(handleCreateMeal)} 
          isLoading={isLoading}
          > 
             <Button.Label>Cadastrar refeição</Button.Label>
            
          </Button.Root>
        </KeyboardAwareScrollView>
      </MealFormSheet>
    </Container>
  )
}
