import styled from "styled-components";
import { ArrowIcon } from "../../Icons/ArrowIcon";

export const Button = styled.button`
  background-color: ${props => props.theme.colors.elementsColor};

  max-width: 104px;
  width: 100%;
  height: 2rem;
  padding: 0 1rem;

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

  cursor: pointer;
`;

export const ArrowIconContainer = styled.div`
  max-width: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(270deg);
`;

export const StyledArrowIcon = styled(ArrowIcon).attrs(props => ({
  fill: props.theme.colors.textColor,
  pathColor: props.theme.colors.textColor
}))`
  fill: ${props => props.theme.colors.textColor};
`;