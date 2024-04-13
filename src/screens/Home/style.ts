import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { css } from 'styled-components/native';

type DietStatusStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: DietStatusStyleTypeProps;
}

export const Container = styled(SafeAreaView)`
    flex: 1;
    padding: 0 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_600};
`

export const HeaderContent = styled.View`
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
    
    border-radius: 999px;
`

export const DietStatus = styled.View<Props>`
    align-items: center;
    justify-content: center;

    border-radius: 8px;
    height: 102px;
    width: 327px;
    margin-top: 36px;
    margin-bottom: 40px;

    position: relative;
    
    background-color: ${({theme, type}) => type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
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

export const TitleSectionList = styled.Text`
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