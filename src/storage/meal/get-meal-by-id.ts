import { MealDTO } from '@/dtos/meal-DTO'
import { getAllMeals } from './get-all-meals'
import { AppError } from '@/error/app-error'

export async function getMealById(id: string): Promise<MealDTO> {
  try {
    const meals = await getAllMeals()

    const meal = meals.find((item) => item.id === id)

    if (!meal) {
      throw new AppError('Refeição não encontrada')
    }

    return meal
  } catch (error) {
    throw error
  }
}
