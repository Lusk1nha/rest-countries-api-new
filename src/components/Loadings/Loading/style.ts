import styled, { keyframes } from "styled-components";
import { SpinnerAnimation } from "../../../styles/animations";

interface IStyledSpinnerProps {
  w: string;
  h: string;
};

export const Container = styled.section`
  width: auto;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const Spinner = styled.div<IStyledSpinnerProps>`
  width: 40px;
  height: 40px;

  border-width: 2px;
  border-radius: 50%;
  border-style: solid;
  border-color: ${props => props.theme.colors.loadingColor} ${props => props.theme.colors.spinnerColor} ${props => props.theme.colors.spinnerColor};

  animation-name: ${SpinnerAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67);

  margin-bottom: 0.5rem;
`;

export const Label = styled.h4`
  color: ${props => props.theme.colors.loadingColor};
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 0.04rem;

  text-align: center;
`;