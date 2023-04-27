import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    min-height: 27.4rem;
    /* height: auto; */

    display: flex;
    align-items: center;
    
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_INPUTS};
    color: ${({theme}) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
    :focus {
        color: ${({theme}) => theme.COLORS.TEXT};
    }
    
    border-radius: 1rem;
    border: none;
    
    padding: 1.9rem 1.6rem;
    resize: none;
    overflow: hidden;
`