import styled from "styled-components";

export const Container = styled.article`
  background-color: ${props => props.theme.colors.elementsColor};
  max-width: 264px;
  height: 336px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  justify-self: center;

  border-radius: 0.313rem;
  
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);

  overflow: hidden;

  cursor: default;

  @media screen and (min-width: 900px) {
    justify-self: flex-start;
  }
`;

export const FlagImageContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 160px;
  margin-top: -5px;
`;

export const Informations = styled.div`
  width: 100%;
  height: 100%;

  color: ${props => props.theme.colors.textColor};

  padding: 1.5rem;
`;