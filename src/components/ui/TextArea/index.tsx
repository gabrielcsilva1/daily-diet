import { TextInputProps, View } from 'react-native'
import { ErrorText, HorizontalContainer, Input, Label } from './style'

type FormInputComponentProps = TextInputProps & {
  label: string
  error?: string
}

export function TextArea({
  label,
  numberOfLines = 5,
  error,
  ...rest
}: FormInputComponentProps) {
  return (
    <View>
      <HorizontalContainer>
        <Label>{label}</Label>
        {error && <ErrorText>{error}</ErrorText>}
      </HorizontalContainer>
      <Input
        numberOfLines={numberOfLines}
        multiline={numberOfLines > 1}
        textAlignVertical="top"
        {...rest}
      />
    </View>
  )
}
