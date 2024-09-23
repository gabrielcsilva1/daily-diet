import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: rgba(0,0,0,0.3);
`

export const Dialog = styled.View`
    padding: 40px 21px 24px;
    margin: 0 24px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-radius: 8px;
`
export const Title = styled.Text`
    text-align: center;
    margin-bottom: 32px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.LG}px;
    `}
`

export const RowContainer = styled.View`
    flex-direction: row;
    gap: 12px;
`