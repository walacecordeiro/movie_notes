import styled from "styled-components";

export const Container=styled.button`
    background: none;
    border: none;

    > a {
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
        transition: .2s;   
    }
`