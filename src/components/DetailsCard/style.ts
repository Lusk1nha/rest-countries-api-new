import styled from "styled-components";

export const FlagContainer = styled.div`
  max-width: 550px;
  width: 100%;
  height: 230px;

  border-radius: 0.358rem;

  overflow: hidden;

  @media screen and (min-width: 500px) {
    height: 250px;
  }

  @media screen and (min-width: 1200px) {
    height: 400px;
    margin-bottom: 0;
  }
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

  padding: 2rem 0;

  @media screen and (min-width: 1200px) {
    height: 400px;
    margin-bottom: 0;
    justify-content: center;

    margin-left: 2rem;
  }
`;

export const Name = styled.h2`
  color: ${props => props.theme.colors.textColor};
  font-size: 1.375rem;
  font-weight: 800;

  margin-bottom: 2rem;
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

  @media screen and (min-width: 1200px) {
    max-width: unset;
    flex-direction: row;
  }
`;

export const BorderLabel = styled.h4`
  color: ${props => props.theme.colors.textColor};
  font-weight: 600;

  margin-bottom: 1rem;

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
    margin-right: 1rem;
  }
`;

export const BorderContent = styled.div`
  width: auto;

  display: grid;

  grid-template-columns: auto auto auto;
  gap: 1rem;

  @media screen and (min-width: 1200px) {
    grid-template-columns: auto auto auto auto;
  }
`;

export const NoBorderFoundContent = styled.h4`
  color: ${props => props.theme.colors.textColor};
  font-weight: 600;
`;