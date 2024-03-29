import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 8.5rem;
    
    display: grid;
    grid-template-rows: 11.6rem 8.5rem auto;
`

export const Head = styled.div`

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding-right: .8rem;
    
    width: fit-content;
    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
        font-weight: 400;
    }
`

export const GoBack = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2.4rem;
    
    width: 120rem;
    margin: 0 auto;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;

    width: 120rem;
    margin: 0 auto;
    padding-top: 4rem;

    .col2{
        display: flex;
        gap: 4rem;
        align-items: center;

        span {
            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
        }
    }

    .tags {
        display: flex;
        justify-content: stretch;
        width: 100%;
        flex-wrap: wrap;
        gap: 2.4rem;

        padding: 1.6rem;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ZERO};
        border-radius: 1rem;
    }

    svg {
        width: 2.5rem;
        transition: .2s;
    }
    
    svg:hover {
        transform: scale(1.8);
        cursor: pointer;
    }

    button {
        width: 100%;
        height: 5.6rem;

        :nth-child(1){
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_ZERO};
            color: ${({ theme }) => theme.COLORS.PINK_GLOBAL};
        }
    }
`

export const ActionButton = styled.div`
    display: flex;
    gap: 4rem;
    width: 121.5rem;
    padding-top: 4rem;
    padding-right: 1.6rem;
    margin: 0 auto;
`