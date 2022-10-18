import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: auto;

  display: grid;
  justify-content: center;
  grid-template-columns: 1fr;
  grid-auto-rows: 1fr;

  gap: 2.5rem 1rem;

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem 3rem;
  }

  @media screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 3rem 4.688rem;
  }

  @media screen and (min-width: 1300px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem 4.688rem;
  }
`;