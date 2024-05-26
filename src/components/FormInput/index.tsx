import { ViewProps } from "react-native";
import { Container, Input, Label } from "./style";

type FormInputComponentProps = ViewProps & {
    label: string,
    numberOfLines?: number,
}

export function FormInput({label, numberOfLines = 1, ...rest}: FormInputComponentProps){
    return (
        <Container {...rest}>
            <Label>{label}</Label>
            <Input numberOfLines={numberOfLines} multiline={numberOfLines > 1} textAlignVertical="top"/>
        </Container>
    )
}