import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-bottom: 2.4rem;

    display: grid;
    grid-template-rows: 11.6rem 13.2rem auto;
`

export const Head = styled.div`

`

export const MyMovies = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 120rem;
    margin: 0 auto;

    h2 {
        font-size: 3.2rem;
        font-weight: 400;
    }
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  width: 120rem;

  margin: 0 auto;

  overflow: auto;

  h1 span {
    font-size: 2.4rem;
  }

  p {
    white-space: pre-wrap;
  }

  .noNotes {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;

    user-select: none;

    svg {
      width: 20rem;
      height: 20rem;
      margin-bottom: 4rem;
      color: ${({ theme }) => theme.COLORS.PINK_GLOBAL};
    }

    h3 {
      color: ${({ theme }) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
    }
  }

  svg {
    width: 1.2rem;
  }
`