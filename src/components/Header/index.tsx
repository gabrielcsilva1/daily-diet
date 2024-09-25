import { useNavigation } from '@react-navigation/native'
import { ArrowIcon, ArrowIconVariantProps } from '../ui/ArrowIcon'
import { BackButton, Container, Subtitle } from './style'

type HeaderComponentProps = {
  subtitle?: string
  $variant?: ArrowIconVariantProps
}

export function Header({
  subtitle = '',
  $variant = 'DEFAULT',
}: HeaderComponentProps) {
  const navigation = useNavigation()
  return (
    <Container>
      <BackButton onPress={() => navigation.goBack()}>
        <ArrowIcon name="arrow-left" $variant={$variant} />
      </BackButton>

      {subtitle && <Subtitle>{subtitle}</Subtitle>}
    </Container>
  )
}
