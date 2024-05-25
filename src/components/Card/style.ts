import clsx from "clsx";
import styled, { css } from "styled-components/native";

export type CardVariantProps = 'DEFAULT' | 'SUCCESS' | 'DANGER'

type Props = {
    $variant: CardVariantProps
}

export const Container = styled.View<Props>`
    align-items: center;
    gap: 8px;

    background-color: ${({$variant, theme}) => clsx([
        $variant === 'DEFAULT' && theme.COLORS.GRAY_600,
        $variant === 'SUCCESS' && theme.COLORS.GREEN_LIGHT,
        $variant === 'DANGER' && theme.COLORS.RED_LIGHT,
    ])};
    
    border-radius: 8px;
    padding: 16px;

    flex-shrink: 1;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.XL}px;
    `}
`

export const Label = styled.Text`
    text-align: center;
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.SM}px;
    `}
`