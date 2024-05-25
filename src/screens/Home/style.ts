import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 0 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const HomeHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;

    align-items: center;
`

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`

export const Avatar = styled.Image`
    width: 40px;
    height: 40px;

    border-width: 1px;
    border-color: ${({theme}) => theme.COLORS.GRAY_200};
    
    border-radius: 9999px;
`

export type DietStatusVariantsProps = 'SUCCESS' | 'DANGER';

type Props = {
    $variant: DietStatusVariantsProps;
}

export const DietStatus = styled.View<Props>`
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    padding: 20px 16px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 40px;

    position: relative;
    
    background-color: ${({theme, $variant}) => $variant === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`

export const DietStatusButton = styled.TouchableOpacity`
    position: absolute;

    top: 8px;
    right: 8px;
`

export const Label = styled.Text`
    margin-bottom: 8px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.MD}px;
    `}
`

export const SectionHeaderText = styled.Text`
    margin-bottom: 8px;

    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-size: ${theme.SIZE.LG}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
    `}
`

export const Separator = styled.View`
    height: 24px;
`