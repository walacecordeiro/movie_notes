import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    height: 11.6rem;
    width: 100%;

    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};

    display: flex;
    padding: 0 12.3rem;
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .9rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;

        a {
            color: ${({theme}) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
        }
    }

    > img {
        width: 6.4rem;
        height: 6.4rem;

        border-radius: 50%;
        border: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
    }
`