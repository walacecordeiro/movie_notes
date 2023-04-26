import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};

        color: ${({ theme }) => theme.COLORS.TEXT};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea, p {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }
    
    span {
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filtter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`