import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;

    width: 100%;
    
    border-bottom-width: .1rem;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.BACKGROUND_TAGS};
        
    .brand {
        font-size: 2.4rem;
    }
    
    .wrapper {
        width: 120rem;
        height: 11.6rem;

        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: .9rem;

    > div {
        display: flex;
        flex-direction: column;
        align-items: end;
        
        font-size: 1.4rem;

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