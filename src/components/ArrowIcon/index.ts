import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';

export type ButtonIconStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    name: 'arrow-left' | 'arrow-up-right',
    type?: ButtonIconStyleTypeProps
}


export const ArrowIcon = styled(Feather).attrs<Props>(({theme, name, type = 'PRIMARY'}) => ({
    name,
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))``