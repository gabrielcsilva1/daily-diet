import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  TimeText,
  MealCardVariantsProps,
  MealLabel,
  StatusIndicator,
} from './style'

type MealCardComponentProps = {
  time: string
  label: string
  $variant: MealCardVariantsProps
} & TouchableOpacityProps

export function MealCard({
  time,
  label,
  $variant,
  ...rest
}: MealCardComponentProps) {
  return (
    <Container activeOpacity={0.5} {...rest}>
      <TimeText>{time}</TimeText>

      <MealLabel numberOfLines={1}>{label}</MealLabel>

      <StatusIndicator $variant={$variant} />
    </Container>
  )
}
