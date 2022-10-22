import styled from "styled-components";

export const FlagContainer = styled.div`
  width: 100%;
  height: 230px;

  border-radius: 0.358rem;

  overflow: hidden;

  margin-bottom: 2.75rem;
`;


export const Informations = styled.article`
  width: 100%;

  flex-grow: 1;
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
`;


export const BorderContent = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;