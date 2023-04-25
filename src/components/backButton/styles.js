import styled from "styled-components";

export const Container=styled.button`
    background: none;
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    color: ${({theme}) => theme.COLORS.PINK_GLOBAL};

    > svg {
        font-size: 1.6rem;
    }
`