import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    
    background-color: ${({theme, isNew}) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUTS};

    border: ${({theme, isNew}) => isNew ? `.1rem dashed ${theme.COLORS.BACKGROUND_INPUTS}` : "none"};
    border-radius: 1rem;

    > button {
        width: fit-content;
        border: none;
        background: none;

        padding: 0 1.6rem;

        svg {
            width: 2.4rem;
            height: 2.4rem;
        }
    }

    .button-delete {
        color: ${({theme}) => theme.COLORS.DELETE};
    }

    .button-add {
        color: ${({theme}) => theme.COLORS.PINK_GLOBAL};
    }

    input {
        padding: 1.6rem 0 1.6rem 1.6rem;

        background-color: transparent;
        color: ${({theme}) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
        :focus {
            color: ${({theme, isNew}) => isNew ? theme.COLORS.TEXT : "none"};
        }

        border: none;
        cursor: auto;
    }
`