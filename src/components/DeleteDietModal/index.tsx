import { Button, ButtonLabel } from '../ui/Button'
import { Container, Dialog, RowContainer, Title } from './style'

type DeleteDietModalComponentProps = {
  onClose: () => void
  onConfirm: () => void
}

export function DeleteDietModal({
  onClose,
  onConfirm,
}: DeleteDietModalComponentProps) {
  return (
    <Container>
      <Dialog>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <RowContainer>
          <Button
            $variant="SECONDARY"
            style={{ flexGrow: 1 }}
            onPress={onClose}
          >
            <ButtonLabel>Cancelar</ButtonLabel>
          </Button>

          <Button style={{ flexGrow: 1 }} onPress={onConfirm}>
            <ButtonLabel>Sim, excluir</ButtonLabel>
          </Button>
        </RowContainer>
      </Dialog>
    </Container>
  )
}
