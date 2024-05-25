import { ReactNode } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.GRAY_500};
`

export const InfoContainer = styled.View`
    gap: 8px;
    margin-bottom: 24px;
`

export const Title = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.LG};
    `}
`

export const Description = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.MD}px;
    `}
`