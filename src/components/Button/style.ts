import styled, { css } from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type ButtonStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: ButtonStyleTypeProps
}

export const Container = styled.TouchableOpacity<Props>`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 12px;

    border-radius: 6px;
    height: 50px;

    ${({theme, type}) => type === 'PRIMARY' ?
        css`background-color: ${theme.COLORS.GRAY_200};` :
        css`border: 1px solid ${theme.COLORS.GRAY_200};` 
}
`

export const ButtonIcon = styled(Feather).attrs<Props>(({theme, type}) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100
}))``

export const Label = styled.Text<Props>`
    ${({theme, type}) => css`
        font-size: ${theme.SIZE.SM}px;
        font-family: ${theme.FONT_FAMILY.BOLD};

        color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_100};
    `}
`;