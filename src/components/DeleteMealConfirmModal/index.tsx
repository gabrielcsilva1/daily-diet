import { Button } from '../ui/Button'
import { Container, Dialog, RowContainer, Title } from './style'

type DeleteMealConfirmModalComponentProps = {
  onClose: () => void
  onConfirm: () => void
}

export function DeleteMealConfirmModal({ onClose, onConfirm }: DeleteMealConfirmModalComponentProps) {
  return (
    <Container>
      <Dialog>
        <Title>Deseja realmente excluir o registro da refeição?</Title>

        <RowContainer>
          <Button.Root
            $variant="SECONDARY"
            style={{ flexGrow: 1 }}
            onPress={onClose}
          >
            <Button.Label>Cancelar</Button.Label>
          </Button.Root>

          <Button.Root style={{ flexGrow: 1 }} onPress={onConfirm}>
            <Button.Label>Sim, excluir</Button.Label>
          </Button.Root>
        </RowContainer>
      </Dialog>
    </Container>
  )
}
