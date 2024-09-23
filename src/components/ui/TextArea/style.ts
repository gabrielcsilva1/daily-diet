import styled from 'styled-components/native'
import { css } from 'styled-components/native'

export const HorizontalContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Label = styled.Text`
  margin-bottom: 4px;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.SIZE.SM}px;
  `}
`

export const ErrorText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.SIZE.XS}px;
  `}
`

export const Input = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.COLORS.GRAY_500,
}))`
  padding: 14px;
  border-radius: 6px;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.SIZE.MD}px;
  `}
`
