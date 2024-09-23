import styled, { css } from "styled-components/native"

export type TagVariantsProps = 'SUCCESS' | 'DANGER'

type Props = {
    $variant: TagVariantsProps
}

export const Container = styled.View`
    gap: 8px;
    margin-right: auto;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    border-radius: 9999px;
`

export const Circle = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 9999px;

    background-color: ${({theme,  $variant}) =>  $variant === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const TagTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.SM}px;
    `}
`