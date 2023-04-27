import styled from "styled-components";

export const Container = styled.div`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CARDS};

    height: fit-content;
    padding: 3.2rem;
    margin-right: .8rem;
    border-radius: 1.6rem;

    display: flex;
    flex-direction: column;

    p {
        padding: 1.5rem 0 3rem;
    }

    h1 {
        padding-bottom: .5rem;
    }
`