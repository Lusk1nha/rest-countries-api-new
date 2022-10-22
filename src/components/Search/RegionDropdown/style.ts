import styled, { css } from "styled-components";

interface IContainerStyleProps {
  disabled: boolean;
};

export const Container = styled.section<IContainerStyleProps>`
  max-width: 200px;
  width: 100%;

  ${props => props.disabled && css`
    opacity: 60%;
    pointer-events: none;
  `}
`;