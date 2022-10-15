import styled from "styled-components";

interface IStyleDropdownProps {
  maxWidth: string;
}

export const Container = styled.section<IStyleDropdownProps>`
  max-width: 50%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Label = styled.h3`
  margin-bottom: 0.765rem;
`;

export const SelectContainer = styled.div`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  height: 48px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  color: ${props => props.theme.colors.textColor};
  
  
  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;
  
  padding: 0 1rem;
  
  border: 0;
  outline: 0;

  overflow: hidden;
`;

export const OptionsContainer = styled.div`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  height: auto;

  padding: 0 1rem;

  box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;

  position: absolute;
  bottom: 1rem;

  border: 0;
  outline: 0;
`;

