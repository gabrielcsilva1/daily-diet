import styled from 'styled-components/native';

export const Container = styled.View`
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