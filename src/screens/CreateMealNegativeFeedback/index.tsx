import { Container, ImageFeedback, Strong, Subtitle, Title } from './style'
import outDietImg from '@/assets/out-diet.png'
import { Button } from '@/components/ui/Button'
import { useNavigation } from '@react-navigation/native'

export function CreateMealNegativeFeedback() {
  const navigation  = useNavigation()

  function handleBackButton() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Title> Que pena! </Title>

      <Subtitle>
        Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
        esforçando e não desista!
      </Subtitle>
    

      <ImageFeedback source={outDietImg} />

      <Button.Root onPress={handleBackButton}>
        <Button.Label>Ir para página inicial</Button.Label>
      </Button.Root>
    </Container>
  )
}
