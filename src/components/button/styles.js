import styled from "styled-components";

export const Container=styled.button`
    background: ${({theme}) => theme.COLORS.PINK_GLOBAL};
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .8rem;

    padding: 1.6rem  3.2rem;
    border-radius: .8rem;

    color: ${({theme}) => theme.COLORS.BACKGROUND_PRIMARY};

    > svg {
        font-size: 1.6rem;
    }
`