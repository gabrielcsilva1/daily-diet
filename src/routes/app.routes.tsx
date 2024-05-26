import { NewMeal } from '@/screens/NewMeal'
import { Home } from '@/screens/Home'
import { DietStats } from '@/screens/DietStats'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NewMealFeedback } from '@/screens/NewMealFeedback'
import { MealInfo } from '@/screens/MealInfo'
import { EditMeal } from '@/screens/EditMeal'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name='home' component={Home}/>
            <Screen name='diet-stats' component={DietStats}/>
            <Screen name='new' component={NewMeal}/>
            <Screen name='feedback' component={NewMealFeedback}/>
            <Screen name='info' component={MealInfo}/>
            <Screen name='edit' component={EditMeal}/>
        </Navigator>
    )
}