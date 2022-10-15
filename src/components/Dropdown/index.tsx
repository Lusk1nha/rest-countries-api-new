import { useState, MouseEvent, useEffect } from "react";
import { IDropdownProps } from "../../shared/props/IDropdownProps";
import { Container, Label, OptionsContainer, SelectContainer, SelectPlaceholder, Option, SelectWrapper, StyledArrowIcon } from "./style";


export function Dropdown(props: IDropdownProps) {
  const [currentValue, setCurrentValue] = useState<string | null>(props.defaultValue ?? null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    props.storeFunction(currentValue)
  }, [currentValue])

  const handleDropdownOpenClick = (event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    setIsOpen(!isOpen);
  };

  const handleOptionClick = (event: MouseEvent<HTMLLIElement>, value: any) => {
    event.preventDefault();
    setCurrentValue(value);
  };

  const renderOptions = () => {
    return props.options != null ? props.options.map(({ value, text }, id) => {
      const isActualOption = value === currentValue;

      return (
        <Option value={value} key={id} active={isActualOption} onClick={(e) => handleOptionClick(e, value)}>
          {text}
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
            {currentValue ?? props.placeholder}
          </SelectPlaceholder>

          <StyledArrowIcon w="14px" h="14px" />
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