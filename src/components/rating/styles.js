import styled from "styled-components";

export const Container=styled.div`
    display: flex;
    gap: .8rem;

    svg {
        width: 1.8rem;
        height: auto;

        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
    }
`