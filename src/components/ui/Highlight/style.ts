import styled, { css } from "styled-components/native";

export const Container = styled.View`
    align-items: center;
    gap: 2px;
`;

export const HighlightTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.XL_2}px;
    `}
`

export const HighlightLabel = styled.Text`
     ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.SM}px;
    `}
`

