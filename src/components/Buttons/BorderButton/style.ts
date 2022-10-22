import styled from "styled-components";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.elementsColor};

  max-width: 96px;
  width: 100%;
  min-height: 28px;

  color: ${props => props.theme.colors.textColor};
  font-size: 0.875rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border: 0;
  outline: 0;

  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 0.125rem;
  overflow: hidden;
`;