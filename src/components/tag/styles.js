import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
    padding: .5rem 1.6rem;
    margin-right: .8rem;
    border-radius: .8rem;
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
`