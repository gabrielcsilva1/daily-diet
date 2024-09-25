import { CardVariantProps, Container, Label, Title } from "./style";

type CardComponentProps = {
    value: string | number;
    description: string;
    $variant?: CardVariantProps
}

export function Card({ value, description, $variant = 'DEFAULT'}: CardComponentProps){
    return (
        <Container $variant={$variant}>
            <Title>{value}</Title>
            <Label>{description}</Label>
        </Container>
    )
}