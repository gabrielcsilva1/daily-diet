import styled, { css } from 'styled-components/native'

export const HorizontalContainer = styled.View`
  flex-direction: row;
  gap: 8px;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.SIZE.SM}px;
  `}
`
