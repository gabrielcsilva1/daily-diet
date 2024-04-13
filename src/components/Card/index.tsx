import { useTheme } from "styled-components/native";
import { Container, Label, Title } from "./style";

type CardComponentProps = {
    title: string;
    label: string;
    color?: string
}

export function Card({ title, label, color = ''}: CardComponentProps){
    const {COLORS} = useTheme();
    return (
        <Container color={color ? color : COLORS.GRAY_600}>
            <Title>{title}</Title>
            <Label>{label}</Label>
        </Container>
    )
}