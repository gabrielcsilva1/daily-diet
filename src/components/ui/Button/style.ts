import styled, { css } from 'styled-components/native'
import { Feather } from '@expo/vector-icons'

export type ButtonVariantsProps = 'PRIMARY' | 'SECONDARY'

type Props = {
  $variant: ButtonVariantsProps
}

export const Container = styled.TouchableOpacity<Props>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 6px;
  padding: 16px;

  ${({ theme, $variant }) =>
    $variant === 'PRIMARY'
      ? css`
          background-color: ${theme.COLORS.GRAY_200};
        `
      : css`
          border: 1px solid ${theme.COLORS.GRAY_200};
        `}
`

export const ButtonIcon = styled(Feather).attrs<Props>(
  ({ theme, $variant }) => ({
    size: 18,
    color: $variant === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100,
  })
)``

export const ButtonLabel = styled.Text<Props>`
  ${({ theme, $variant }) => css`
    font-size: ${theme.SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};

    color: ${$variant === 'PRIMARY'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_100};
  `}
`
