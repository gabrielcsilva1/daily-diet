import { SafeAreaView } from 'react-native-safe-area-context'
import styled, { css } from 'styled-components/native'

export const Container = styled(SafeAreaView)`
  padding-top: 16px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const GeneralStatsContainer = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
  margin-top: 34px;
  padding: 33px 24px;
`

export const Subtitle = styled.Text`
  margin-bottom: 23px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.SIZE.SM}px;
  `}
`

type CardsContainerStyledProps = {
  isHorizontal?: boolean
}

export const CardsContainer = styled.View<CardsContainerStyledProps>`
  gap: 12px;
  flex-direction: ${({ isHorizontal }) => (isHorizontal ? 'row' : 'column')};
  width: 100%;
`
