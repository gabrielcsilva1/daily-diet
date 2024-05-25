import { TouchableOpacityProps } from "react-native";
import { Container, Hour, MealCardVariantsProps, MealLabel, StatusIndicator } from "./style";

type MealCardComponentProps = {
    hour: string,
    label: string,
    $variant: MealCardVariantsProps
} & TouchableOpacityProps

export function MealCard({ hour, label, $variant, ...rest}: MealCardComponentProps){
    return (
        <Container activeOpacity={0.5} {...rest}>
            <Hour>{hour}</Hour>

            <MealLabel numberOfLines={1}>{label}</MealLabel>

            <StatusIndicator $variant={$variant}/>
        </Container>
    )
}