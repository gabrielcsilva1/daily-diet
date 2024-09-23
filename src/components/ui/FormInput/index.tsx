import { TextInputProps } from 'react-native'
import {
  Input,
  Label,
  Container,
  ErrorText,
  HorizontalContainer,
} from './style'

type FormInputComponentProps = TextInputProps & {
  label: string
  numberOfLines?: number
  error?: string
}

export function FormInput({ label, error, ...rest }: FormInputComponentProps) {
  return (
    <Container>
      <HorizontalContainer>
        <Label>{label}</Label>
        {error && <ErrorText> {error} </ErrorText>}
      </HorizontalContainer>
      <Input {...rest} />
    </Container>
  )
}
