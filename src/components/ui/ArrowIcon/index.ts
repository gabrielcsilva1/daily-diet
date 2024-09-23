import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import  clsx  from 'clsx'

export type ArrowIconVariantProps = 'DEFAULT' | 'SUCCESS' | 'DANGER'

type Props = {
    name: 'arrow-left' | 'arrow-up-right',
    $variant?: ArrowIconVariantProps
}

export const ArrowIcon = styled(Feather).attrs<Props>(({theme, name, $variant = 'DEFAULT'}) => ({
    name,
    size: 24,
    color: clsx(
        $variant === 'DEFAULT' && theme.COLORS.GRAY_200,
        $variant === 'SUCCESS' && theme.COLORS.GREEN_DARK,
        $variant === 'DANGER' && theme.COLORS.RED_DARK,
    )
}))``