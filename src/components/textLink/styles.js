import styled from "styled-components";

export const Container=styled.button`
    background: none;
    border: none;
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    margin: 0 auto;

    > a {
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
        transition: .2s;   
    }
    
    > svg {
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
        font-size: 1.6rem;
    }
`