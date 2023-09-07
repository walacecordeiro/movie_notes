import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled(Link)`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_CARDS};
    color: inherit;

    height: fit-content;
    padding: 3.2rem;
    margin-right: .8rem;
    border-radius: 1.6rem;

    display: flex;
    flex-direction: column;

    transition: .2s;
    :hover{
        transform: translateX(.8rem);
    }

    p {
        padding: 1.5rem 0 3rem;
    }

    h1 {
        padding-bottom: .5rem;
    }

    svg {
        width: 1.5rem;
    }
`