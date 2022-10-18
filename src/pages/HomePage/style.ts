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

export const LoadingContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 5rem;
`;

export const NothingFoundContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: center;

  padding-top: 5rem;
`;

export const Center = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 888px;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }
`;