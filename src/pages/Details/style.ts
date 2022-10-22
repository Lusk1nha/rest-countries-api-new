import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 auto;

  padding: 1rem 1.5rem;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 500px) {
    max-width: 500px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`;

export const BackButtonContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;

  margin: 1.52rem 0 4rem;
`;

export const Content = styled.section`
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
`;