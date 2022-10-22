import styled from "styled-components";
import { FilledMoonIcon } from "../../Icons/FilledMoonIcon";
import { MoonIcon } from "../../Icons/MoonIcon";

export const Button = styled.button`
  background: transparent;
  max-width: 120px;
  width: 100%;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;
  
  border: 0;
  outline: 0;

  padding: 0 0.3rem;

  &:focus {
    outline: 2px dashed ${props => props.theme.colors.textColor};
  }
`;

export const MoonIconContainer = styled.div`
  width: 25px;
  height: 25px;
`;

export const StyledMoonIcon = styled(MoonIcon).attrs(props => ({
  fill: props.theme.colors.textColor,
  pathColor: props.theme.colors.textColor
}))`
  width: 25px;
  height: 25px;
  fill: ${props => props.theme.colors.textColor};
`;

export const FilledMoonIconContainer = styled.div`
  width: 25px;
  height: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;


export const StyledFilledMoonIcon = styled(FilledMoonIcon).attrs(props => ({
  fill: props.theme.colors.textColor,
  pathColor: props.theme.colors.textColor
}))`
  fill: ${props => props.theme.colors.textColor};
`;

export const Text = styled.p`
  height: 100%;

  color: ${props => props.theme.colors.textColor};
  font-size: ${props => props.theme.fontSize.sm};
  font-weight: 600;

  display: flex;
  align-items: center;
`;