import AsyncStorage from '@react-native-async-storage/async-storage'
import { getAllMeals } from './get-all-meals'
import { MEAL_COLLECTION } from '../storage-config'

export async function deleteMeal(id: string) {
  try {
    const meals = await getAllMeals()

    const storage = meals.filter((meal) => meal.id !== id)

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
