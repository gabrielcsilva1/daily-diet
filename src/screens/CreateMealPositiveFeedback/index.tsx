import { Container, ImageFeedback, Strong, Subtitle, Title } from './style'
import inDietImg from '@/assets/inside-diet.png'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'

export function CreateMealPositiveFeedback() {
  const navigation  = useNavigation()

  function handleBackButton() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title> Continue assim! </Title>

      <Subtitle>
        Você continua <Strong>dentro da dieta</Strong>. Muito bem!
      </Subtitle>

      <ImageFeedback source={inDietImg} />

      <Button.Root onPress={handleBackButton}>
        <Button.Label>Ir para página inicial</Button.Label>
      </Button.Root>
    </Container>
  )
}
