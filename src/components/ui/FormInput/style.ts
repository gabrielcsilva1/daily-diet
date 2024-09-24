import styled from 'styled-components/native'
import { css } from 'styled-components/native'

export const Root = styled.View`
  flex: 1;
  max-height: 70px;
  gap: 4px;
`

export const HorizontalContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
`

export const Label = styled.Text`
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

  max-height: 48px;
  min-height: 48px;

  flex-grow: 1;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_500};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
  `}
`
