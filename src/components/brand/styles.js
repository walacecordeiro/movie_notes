import styled from "styled-components";

export const Container = styled.div`
    h2 {
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
    }
    span {
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.CAPTION};
    }
`