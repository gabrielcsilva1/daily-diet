import { Container, Input, Label } from "./style";

type FormInputComponentProps = {
    label: string,
    numberOfLines?: number,
}

export function FormInput({label, numberOfLines = 1}: FormInputComponentProps){
    return (
        <Container>
            <Label>{label}</Label>
            <Input numberOfLines={numberOfLines} multiline={numberOfLines > 1} textAlignVertical="top"/>
        </Container>
    )
}