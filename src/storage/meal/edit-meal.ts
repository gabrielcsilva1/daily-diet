import { MealDTO } from '@/dtos/meal-DTO'
import { getAllMeals } from './get-all-meals'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { MEAL_COLLECTION } from '../storage-config'

export async function editMeal(newMeal: MealDTO) {
  try {
    const meals = await getAllMeals()

    const storage = meals.map((meal) => {
      if (newMeal.id === meal.id) {
        return newMeal
      }
      return meal
    })

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(storage))
  } catch (error) {
    throw error
  }
}
