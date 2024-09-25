import dayjs from 'dayjs'
import { getAllMeals } from './get-all-meals'

export async function getStatistics() {
  try {
    const meals = await getAllMeals()

    meals.sort((a, b) => (dayjs(a.date).isBefore(b.date) ? 1 : -1))

    const statistics = {
      percentage: 0,
      bestSequence: 0,
      inDietAmount: 0,
      outDietAmount: 0,
      totalAmount: 0,
    }

    let currentSequence = 0

    meals.forEach((meal) => {
      if (meal.isOnDiet) {
        statistics.inDietAmount += 1
        currentSequence += 1

        if (currentSequence > statistics.bestSequence) {
          statistics.bestSequence = currentSequence
        }
      } else {
        statistics.outDietAmount += 1
        currentSequence = 0
      }

      statistics.totalAmount += 1
    })

    statistics.percentage =
      (statistics.inDietAmount / statistics.totalAmount) * 100

    return statistics
  } catch (error) {
    throw error
  }
}
