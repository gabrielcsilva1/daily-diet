import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_700};
`

export type TitleVariantsProps = 'SUCCESS' | 'DANGER'

type Props = {
    $variant : TitleVariantsProps
}

export const Title = styled.Text<Props>`
    margin-bottom: 8px;
    ${({theme, $variant}) => css`
        color: ${$variant === 'SUCCESS'? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.XL}px;
    `};
`

export const Subtitle = styled.Text`
    margin-bottom: 40px;
    text-align: center;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${ theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.MD}px;
    `};
`

export const Strong = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
`

export const ImageFeedback = styled.Image`
    width: 224px;
    height: 288px;
    margin-bottom: 32px;
`