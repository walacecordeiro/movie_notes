import styled from "styled-components";
import bgSignInSignUp from "../../assets/bgSignInSignUp.png"

export const Container=styled.div`
    height: 100vh;

    display: flex;
    /* align-items: stretch; */
    `

export const Form = styled.form`
    padding: 0 13.4rem;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: .8rem;

    > h2 {
        font-size: 2.4rem;
        margin: 4rem 0;
    }

    > button:nth-child(5) {
        margin: 1.6rem 0 3.4rem;
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${bgSignInSignUp}) no-repeat center center;
    background-size: cover;
`