import styled from "styled-components";

export const FlagContainer = styled.div`
  width: 100%;
  height: 230px;

  border-radius: 0.358rem;

  overflow: hidden;

  margin-bottom: 2.75rem;

  @media screen and (min-width: 1200px) {
    height: 400px;
    margin-bottom: 0;
  }
`;


export const Informations = styled.article`
  width: 100%;

  flex-grow: 1;

  @media screen and (min-width: 1200px) {
    height: 400px;
    margin-bottom: 0;
    justify-content: center;

    margin-left: 2rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 2rem;

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const SubInformations = styled.article`
  width: 100%;
  height: auto;

  margin-bottom: 1.5rem;
`;

export const Label = styled.div`
  width: 100%;
  height: auto;

  margin-bottom: 0.675rem;
`;


export const BorderContainer = styled.section`
  max-width: 370px;
  width: 100%;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    max-width: unset;
    flex-direction: row;
  }
`;


export const BorderContent = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;