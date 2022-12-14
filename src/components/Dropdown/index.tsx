import { useState, MouseEvent, useEffect } from "react";
import { IDropdownProps, IDropdownOptionsProps } from "../../shared/props/IDropdownProps";
import { Container, Label, ArrowIconContainer, OptionsContainer, SelectContainer, SelectPlaceholder, Option, SelectWrapper, StyledArrowIcon } from "./style";

export function Dropdown(props: IDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentValue, setCurrentValue] = useState<IDropdownOptionsProps | null>({
    text: null,
    value: null
  });

  useEffect(() => {
    props.storeFunction(currentValue?.value ?? null)
  }, [currentValue])

  /**
   * Handle dropdown click, with that the dropdown is open/close
   * @param event mouse event
   */
  const handleDropdownOpenClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsOpen(!isOpen);
  };

  /**
   * Handle option click
   * @param event option event
   * @param value value thats saved in option
   */
  const handleOptionClick = (event: MouseEvent<HTMLLIElement>, value: IDropdownOptionsProps) => {
    event.preventDefault();
    setCurrentValue(value);
  };

  /**
   * Render options components
   * @returns Return options components
   */
  const renderOptions = () => {
    return props.options != null ? props.options.map((option, id) => {
      const isActualOption = option.value === currentValue?.value;

      return (
        <Option value={option} key={id} active={isActualOption} onClick={(e) => handleOptionClick(e, option)}>
          {option.text}
        </Option>
      );
    }) : null
  };

  return (
    <Container disabled={props.disabled} onClick={handleDropdownOpenClick}>
      {props.label != null && <Label>{props.label}</Label>}

      <SelectContainer>
        <SelectWrapper>
          <SelectPlaceholder>
            {currentValue?.text ?? props.placeholder}
          </SelectPlaceholder>

          <ArrowIconContainer>
            <StyledArrowIcon />
          </ArrowIconContainer>
        </SelectWrapper>

        {isOpen && (
          <OptionsContainer>
            {renderOptions()}
          </OptionsContainer>
        )}
      </SelectContainer>
    </Container>
  );
};