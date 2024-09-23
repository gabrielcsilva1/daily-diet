import dayjs from 'dayjs'
import { getAllMeals } from './get-all-meals'
import { MealsHistoryDTO } from '@/dtos/meals-history-DTO'

export async function getMealsHistory() {
  try {
    const meals = await getAllMeals()

    meals.sort((a, b) => (dayjs(a.date).isBefore(b.date) ? 1 : -1))

    if (meals.length <= 0) {
      return []
    }

    const history: MealsHistoryDTO = []

    let currentDate = dayjs(meals[0].date).subtract(1, 'year')

    meals.forEach((meal) => {
      const isOnSameDate = currentDate.isSame(meal.date)

      if (!isOnSameDate) {
        currentDate = dayjs(meal.date)
        const formatedDate = dayjs(meal.date).format('DD.MM.YY')

        history.push({
          title: formatedDate,
          data: [],
        })
      }

      history[history.length - 1].data.push({
        id: meal.id,
        name: meal.name,
        time: dayjs(meal.date).format('HH:mm'),
        isOnDiet: meal.isOnDiet,
      })
    })

    return history
  } catch (error) {
    throw error
  }
}
