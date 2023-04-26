import styled from "styled-components";

export const Container = styled.div`
    width: 63rem;
    display: flex;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUTS};
    border-radius: 1rem;
    
    > input {
        width: 100%;
        height: 5.6rem;
        
        padding: 1.9rem 1.6rem;

        color: ${({theme}) => theme.COLORS.TEXT};
        background: transparent;
        border: none;

        font-size: 1.4rem;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
        }
    }

    > svg {
        margin-left: 1.6rem;
    }
`