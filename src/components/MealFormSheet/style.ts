import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    margin-top: 24px;
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 40px 24px 0px;
`