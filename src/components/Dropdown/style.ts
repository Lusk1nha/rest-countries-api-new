import styled from "styled-components";
import { DownArrowIcon } from "../Icons/DownArrowIcon";

interface IStyleDropdownProps {
  maxWidth?: string;
  disabled?: boolean;
};

interface IStyleOptionProps {
  active?: boolean;
  value: any;
};

interface IStyleArrowIconProps {
  hasOpen: boolean;
};

export const Container = styled.section<IStyleDropdownProps>`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  ${props => props.disabled && ({
    opacity: '30%',
    pointerEvents: 'none'
  })}

  z-index: 1;
`;

export const Label = styled.h3`
  margin-bottom: 0.765rem;
`;

export const SelectContainer = styled.div`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  min-height: 48px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
  color: ${props => props.theme.colors.textColor};
  
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;
  
  padding: 0.3rem 1.2rem 0.3rem 1.75rem;
  
  border: 0;
  outline: 0;

  cursor: pointer;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SelectPlaceholder = styled.h4`
  /* width: 100%; */
  
  font-size: 0.85rem;
  font-weight: 400;
  color: ${props => props.theme.colors.textColor};

  text-align: center;
  user-select: none;
`;

export const ArrowIconContainer = styled.div`
  width: 12px;
  height: 15px;
`;

export const StyledArrowIcon = styled(DownArrowIcon).attrs<IStyleArrowIconProps>(props => ({
  fill: props.theme.colors.textColor,
  pathColor: props.theme.colors.textColor
}))`
  fill: ${props => props.theme.colors.textColor};
  font-weight: 800;
`;

export const OptionsContainer = styled.ul`
  background: ${props => props.theme.colors.elementsColor};
  width: 100%;
  height: auto;

  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.1);
  border-radius: 0.313rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  position: absolute;
  top: 115%;
  left: 0;
  right: 0;

  border: 0;
  outline: 0;
  
  overflow: hidden;

  z-index: 1;
`;

export const Option = styled.li<IStyleOptionProps>`
  width: 100%;
  height: auto;

  list-style-type: none;
  padding: 0.675rem 1.5rem 0.575rem 1.75rem;

  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1rem;

  user-select: none;
  cursor: pointer;

  &:hover, &:focus  {
    background: rgba(0, 0, 0, 0.18);
  }

  ${props => props.active && ({
    background: 'rgba(0, 0, 0, 0.2)'
  })}
`;