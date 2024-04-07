import { TouchableOpacityProps } from "react-native";
import { Container, Hour, MealCardStyleTypeProps, MealLabel, StatusIndicator } from "./style";

type MealCardComponentProps = {
    hour: string,
    label: string,
    style: MealCardStyleTypeProps
} & TouchableOpacityProps

export function MealCard({ hour, label, style, ...rest}: MealCardComponentProps){
    return (
        <Container activeOpacity={0.5} {...rest}>
            <Hour>{hour}</Hour>

            <MealLabel numberOfLines={1}>{label}</MealLabel>

            <StatusIndicator style={style}/>
        </Container>
    )
}