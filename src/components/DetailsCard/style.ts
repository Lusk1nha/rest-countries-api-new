import styled from "styled-components";

export const FlagContainer = styled.div`
  width: 100%;
  height: 230px;

  border-radius: 0.358rem;

  overflow: hidden;

  margin-bottom: 2.75rem;
`;

export const FlagImage = styled.img`
  background-size: cover;
  object-fit: cover;

  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
`;

export const Informations = styled.div`
  width: 100%;

  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Name = styled.h2`
  color: ${props => props.theme.colors.textColor};
  font-size: 1.375rem;
  font-weight: 800;

  margin-bottom: 2rem;
`;

export const SubInformations = styled.article`
  width: 100%;
  height: auto;

  margin-bottom: 1rem;
`;

export const Label = styled.p`
  line-height: 2rem;
  font-weight: 300;
  color: ${props => props.theme.colors.textColor};
`;

export const InformationLabel = styled.strong`
  font-weight: 600;
  margin-right: 0.4rem;
`;

export const BorderContainer = styled.section`
  max-width: 370px;
  width: 100%;

  display: flex;
  flex-direction: column;

  flex-grow: 1;
`;

export const BorderLabel = styled.h4`
  color: ${props => props.theme.colors.textColor};
  font-weight: 600;

  margin-bottom: 1rem;
`;

export const BorderContent = styled.div`
  width: auto;

  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;