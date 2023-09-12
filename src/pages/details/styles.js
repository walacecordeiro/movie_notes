import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: auto;

    width: 113.7rem;
    margin: 4rem auto 2.4rem;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: start;

  p {
    text-align: justify;
    white-space: pre-wrap;
    margin-right: 1.6rem;
  }

  Button:nth-child(6) {
    align-self: flex-end;
    color: white;
    margin-top: 4rem;
    margin-right: 1.6rem;
    background-color: ${({ theme }) => theme.COLORS.DELETE};
  }
`

export const TitleAndRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1.9rem;

  width: 100%;
  margin-top: 2.4rem;
`;

export const Author = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  padding-top: 2.4rem;

  gap: 0.8rem;

  img {
    width: 1.6rem;
    height: 1.6rem;

    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.PLACEHOLDER_NOT_ACTIVE};
  }

  p {
    font-family: "Roboto", sans-serif;
  }

  svg {
    width: 1.6rem;
    color: ${({ theme }) => theme.COLORS.PINK_GLOBAL};
  }
`;
export const Tags = styled.section`
  padding: 4rem 0;
`;
