import { TextInputProps } from 'react-native'
import {
  Input,
  Label,
  ErrorText,
  HorizontalContainer,
  Root,
} from './style'

type FormInputComponentProps = TextInputProps & {
  label: string
  error?: string
}

export function FormInput({ label, error, ...rest }: FormInputComponentProps) {
  return (
    <Root>
      <HorizontalContainer>
        <Label>{label}</Label>
        {error && <ErrorText> {error} </ErrorText>}
      </HorizontalContainer>
      <Input {...rest} />
    </Root>
  )
}

export const Form = {Root, Label, Input, ErrorText, HorizontalContainer}
