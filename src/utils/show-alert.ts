import { Alert } from 'react-native'

type Props = {
  title: string
  message: string
  onPress?: () => void
}

export function showAlert({ title, message, onPress = () => {} }: Props) {
  Alert.alert(title, message, [
    {
      text: 'OK',
      onPress,
    },
  ])
}
