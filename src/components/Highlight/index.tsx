import { Container, HighlightLabel, HighlightTitle } from "./style";

type HighlightComponentProps = {
    title: string;
    label: string
}

export function Highlight({ title, label}: HighlightComponentProps){
    return (
        <Container>
            <HighlightTitle>{title}</HighlightTitle>
            <HighlightLabel>{label}</HighlightLabel>
        </Container>
    )
}