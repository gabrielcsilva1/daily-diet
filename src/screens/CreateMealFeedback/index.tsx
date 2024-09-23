import { Container, ImageFeedback, Strong, Subtitle, Title } from './style'
import inDietImg from '@/assets/inside-diet.png'
import outDietImg from '@/assets/out-diet.png'
import { Button } from '@/components/ui/Button'

export function CreateMealFeedback() {
  const isInDiet = false

  return (
    <Container>
      <Title $variant={isInDiet ? 'SUCCESS' : 'DANGER'}>
        {isInDiet ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {isInDiet ? (
        <Subtitle>
          Você continua <Strong>dentro da dieta</Strong>. Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <Strong>saiu da dieta</Strong> dessa vez, mas continue se
          esforçando e não desista!
        </Subtitle>
      )}

      <ImageFeedback source={isInDiet ? inDietImg : outDietImg} />

      <Button.Root>
        <Button.Label>Ir para página inicial</Button.Label>
      </Button.Root>
    </Container>
  )
}
