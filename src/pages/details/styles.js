import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100vh;

    div {
        max-width: 111.3rem;
        height: fit-content;

        .title {
            display: flex;
            align-items: center;
            gap: 1.9rem;
            margin-top: 2.4rem;
        }
    }
`

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: .8rem;

    img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
    }

    p {
        font-family: 'Roboto', sans-serif;
    }

    svg {
        width: 1.6rem;
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
    }
`