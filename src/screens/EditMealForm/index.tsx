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
import { DateTimeInputs } from '@/components/DateTimeInputs'
import { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { getMealById } from '@/storage/meal/get-meal-by-id'
import { AppError } from '@/error/app-error'
import { editMeal } from '@/storage/meal/edit-meal'
import { Loading } from '@/components/ui/Loading'
import { showAlert } from '@/utils/show-alert'

const mealFormSchema = z.object({
  name: z.string({ message: 'Por favor forneça o nome' }),
  description: z.string({ message: 'Por favor forneça a descrição' }),
  date: z.date({ message: 'Por favor forneça a data' }),
  isOnDiet: z.boolean(),
})

type MealFormType = z.infer<typeof mealFormSchema>
type RouteParams = {
  id: string
}

export function EditMealForm() {
  const [isUpdating, setIsUpdating] = useState(false)
  const [isFetchingData, setIsFetchingData] = useState(true)
  const route = useRoute()
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors }, reset} = useForm<MealFormType>({
    resolver: zodResolver(mealFormSchema),
    defaultValues: {
      date: new Date(),
      isOnDiet: true
    }
  })

  const { id } = route.params as RouteParams

  async function handleUpdateMeal(data: MealFormType) {

    try {
      setIsUpdating(true)
      
      await editMeal({
        id,
        name: data.name,
        description: data.description,
        date: data.date.toISOString(),
        isOnDiet: data.isOnDiet
      })

      navigation.navigate('home')
    }
    catch (error) {
      setIsUpdating(false)
      showAlert({title: 'Ocorreu um erro!', message: 'Error ao atualizar o refeição'})
    }
  }

  async function fetchMeal() {
    try {
      const meal = await getMealById(id)
      reset({
        name: meal.name,
        description: meal.description,
        date: new Date(meal.date),
        isOnDiet: meal.isOnDiet
      })
    } 
    catch( error ) {
      if (error instanceof AppError) {
        showAlert({title: 'Ocorreu um erro!', message: error.message})
      }
      else {
        showAlert({title: 'Ocorreu um erro!', message: 'Error ao encontrar a refeição'})
      }
    }
    finally {
      setIsFetchingData(false)
    }
  }

  useEffect(() => {
    fetchMeal()
  }, [])

  if (isFetchingData) {
    return <Loading/>
  }
  
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
          onPress={handleSubmit(handleUpdateMeal)} 
          isLoading={isUpdating}
          > 
             <Button.Label>Cadastrar refeição</Button.Label>
            
          </Button.Root>
        </KeyboardAwareScrollView>
      </MealFormSheet>
    </Container>
  )
}
