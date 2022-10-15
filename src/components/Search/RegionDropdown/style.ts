import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const SelectContainer = styled.select`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  height: 48px;

  padding: 0 1rem;

  color: ${props => props.theme.colors.textColor};

  overflow: hidden;

  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);

  border-radius: 0.313rem;

  border: 0;
  outline: 0;
`;

export const OptionContainer = styled.option``;

export const OptionPlaceholder = styled(OptionContainer).attrs(() => ({
  value: "",
  disabled: true
}))``;
