import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem;
    grid-template-areas: 
    "header"
    "content"
    ;

    > main {
        grid-area: content;
        overflow-y: auto;
        padding: 4rem 0;
    }
`

export const Content = styled.div`
    max-width: 111.3rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: start;
`

export const TitleAndRating=styled.div`
    display: flex;
    align-items: center;
    gap: 1.9rem;
    margin-top: 2.4rem;
`

export const Author = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-top: 2.4rem;

    gap: .8rem;

    img {
        width: 1.6rem;
        height: 1.6rem;

        border-radius: 50%;
        border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
    }

    p {
        font-family: 'Roboto', sans-serif;
    }

    svg {
        width: 1.6rem;
        color: ${({ theme }) => theme.COLORS.PINK_GLOBAL};
    }
`
export const Tags=styled.div`
    padding: 4rem 0;
`