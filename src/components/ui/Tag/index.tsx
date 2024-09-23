import { Circle, Container, TagTitle, TagVariantsProps } from "./style";

type TagComponentProps = {
    $variant : TagVariantsProps,
}

export function Tag({$variant}: TagComponentProps){
    return (
        <Container>
            <Circle $variant={$variant}/>
            <TagTitle>{$variant === 'SUCCESS' ? 'dentro da dieta' : 'fora da dieta'}</TagTitle>
        </Container>
    )
}