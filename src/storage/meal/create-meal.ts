import { MealDTO } from '@/dtos/meal-DTO'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storage-config'
import { getAllMeals } from './get-all-meals'

export async function createMeal(newMeal: MealDTO) {
  try {
    const meals = await getAllMeals()
    const storage = JSON.stringify([...meals, newMeal])

    await AsyncStorage.setItem(MEAL_COLLECTION, storage)
  } catch (error) {
    throw error
  }
}
