import { useTheme } from "styled-components/native";
import { Container } from "./style";
import { ActivityIndicator } from "react-native";

type LoadingProps = {
    color?: string
}

export function Loading({ color }: LoadingProps){
    const {COLORS} = useTheme()
    return (
        <Container>
            <ActivityIndicator color={color ?? COLORS.GRAY_100}/>
        </Container>
    )
}