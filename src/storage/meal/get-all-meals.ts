import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storage-config'
import { MealDTO } from '@/dtos/meal-DTO'

export async function getAllMeals(): Promise<MealDTO[]> {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION)

    const meals: MealDTO[] = storage ? JSON.parse(storage) : []

    return meals
  } catch (error) {
    throw error
  }
}
