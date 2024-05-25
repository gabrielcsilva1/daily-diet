import { StyleSheet } from "react-native";
import { useTheme } from "styled-components/native";
import { Circle, Container, OptionButtonStyleTypeProps, OptionButtonTitle } from "./style";

type OptionButtonComponentProps = {
    title: string,
    variant: OptionButtonStyleTypeProps
    isSelected?: boolean
}

export function OptionButton({title, variant, isSelected}: OptionButtonComponentProps){
    const { COLORS } = useTheme();
    const activeStyle = {
        backgroundColor: variant === 'PRIMARY' ? COLORS.GREEN_LIGHT : COLORS.RED_LIGHT,
        borderColor: variant === 'PRIMARY' ? COLORS.GREEN_DARK : COLORS.RED_DARK
    }

    return (
        <Container activeOpacity={0.7} style={isSelected ? activeStyle : []}>
            <Circle variant={variant}/>
            <OptionButtonTitle>{title}</OptionButtonTitle>
        </Container>
    )
}