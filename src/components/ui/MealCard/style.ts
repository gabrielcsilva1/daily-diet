import styled, { css } from 'styled-components/native'

export type MealCardVariantsProps = 'SUCCESS' | 'DANGER'

type Props = {
  $variant: MealCardVariantsProps
}

export const Container = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  gap: 12px;
  padding: 14px 16px 14px 12px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
`

export const TimeText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.SIZE.XS}px;
  `}
`

export const MealLabel = styled.Text`
  flex: 1;
  padding-left: 12px;

  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.SIZE.MD}px;

    border-left-color: ${theme.COLORS.GRAY_400};
    border-left-width: 1px;
  `}
`

export const StatusIndicator = styled.View<Props>`
  height: 14px;
  width: 14px;

  background-color: ${({ theme, $variant }) =>
    $variant === 'SUCCESS' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  border-radius: 999px;
`
