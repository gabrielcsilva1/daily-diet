export type MealsHistoryDTO = {
  title: string
  data: {
    id: string
    name: string
    time: string
    isOnDiet: boolean
  }[]
}[]
