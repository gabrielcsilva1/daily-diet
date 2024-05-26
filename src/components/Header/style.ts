import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 12px;
    margin-top: 16px;
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.LG}px;
    `}
`

export const BackButton = styled.TouchableOpacity`
    justify-self: center;
    position: absolute;
    padding: 24px;
    left: 0;
`