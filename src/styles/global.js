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

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a {
        text-decoration: none;
        outline: none;
    }

    button, a {
        cursor: pointer;
        transition: filtter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    ::-webkit-scrollbar {
        width: .8rem;
        height: .8rem;
    }

    ::-webkit-scrollbar-track {
        background-color: transparent;
        border-radius: .8rem;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.PINK_GLOBAL};
        border-radius: .8rem;
    }

`