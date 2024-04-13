import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    
    align-items: center;
    justify-content: center;
    position: relative;
    margin-bottom: 12px;
`

export const Subtitle = styled.Text`
    ${({theme}) => css`
        color: ${theme.COLORS.GRAY_100};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.SIZE.LG}px;
    `}
`

export const BackButton = styled.TouchableOpacity`
    left: 0;
    position: absolute;
    padding: 0px 24px;
`