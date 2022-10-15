import styled from "styled-components";
import { MagnifyingGlassIcon } from "../../Icons/MagnifyingGlassIcon";

export const Container = styled.section`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  border-radius: 0.313rem;

  padding: 0 2rem 0 0.5rem;

  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);

  overflow: hidden;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0 1rem;
`;

export const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon).attrs(props => ({
  fill: props.theme.colors.textColor,
  pathColor: props.theme.colors.textColor
}))`
  fill: ${props => props.theme.colors.textColor};
`;

export const Input = styled.input.attrs(props => ({
  type: 'text',
  placeholder: props.placeholder ?? 'Search for a country...'
}))`
  background: transparent;
  width: 100%;

  color: ${props => props.theme.colors.textColor};
  font-size: 0.85rem;

  border: 0;
  outline: 0;

  &::placeholder {
    color: ${props => props.theme.colors.textColor};
    user-select: none;
  }
`;

