import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';


type Props = {
    name: 'arrow-left' | 'arrow-up-right'
}

export const ArrowIcon = styled(Feather).attrs<Props>(({theme, name, color}) => ({
    name,
    size: 24,
    color: color ? color : theme.COLORS.GRAY_200,
}))``