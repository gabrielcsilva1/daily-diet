import { CreateMealForm } from '@/screens/CreateMealForm'
import { Home } from '@/screens/Home'
import { DietStats } from '@/screens/DietStats'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CreateMealNegativeFeedback } from '@/screens/CreateMealNegativeFeedback'
import { MealInfo } from '@/screens/MealInfo'
import { EditMealForm } from '@/screens/EditMealForm'
import { CreateMealPositiveFeedback } from '@/screens/CreateMealPositiveFeedback'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes(){
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            <Screen name='home' component={Home}/>
            <Screen name='diet-stats' component={DietStats}/>
            <Screen name='create-meal' component={CreateMealForm}/>
            <Screen name='negative-feedback' component={CreateMealNegativeFeedback}/>
            <Screen name='positive-feedback' component={CreateMealPositiveFeedback}/>
            <Screen name='meal-info' component={MealInfo}/>
            <Screen name='edit-meal' component={EditMealForm}/>
        </Navigator>
    )
}