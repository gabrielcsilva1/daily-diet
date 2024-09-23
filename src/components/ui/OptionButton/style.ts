import styled, { css } from "styled-components/native";

export type OptionButtonStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    variant: OptionButtonStyleTypeProps
}

export const Container = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-direction: row;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
    border-radius: 6px;
    border: 1px solid transparent;
    padding: 16px;
`

export const Circle = styled.View<Props>`
    height: 8px;
    width: 8px;
    border-radius: 99px;

    background-color: ${({theme, variant}) => variant === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const OptionButtonTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.SM}px;
    `}
`