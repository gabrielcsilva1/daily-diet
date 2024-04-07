import styled from 'styled-components/native';
import { css } from 'styled-components/native';

type DietStatusStyleTypeProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: DietStatusStyleTypeProps;
}

export const Container = styled.View`
    flex: 1;
    padding: 0 24px;
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

export const DietStatusTitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.XL_2}px;
    `}
`

export const DietStatusLabel = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.SIZE.SM}px;
    `}
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