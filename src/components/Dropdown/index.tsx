import { useState } from "react";
import { IDropdownProps } from "../../shared/props/IDropdownProps";
import { IDropdownState } from "../../shared/states/IDropdownState";
import { Container, Label, OptionsContainer, SelectContainer } from "./style";


export function Dropdown(props: IDropdownProps) {
  const [currentValue, setCurrentValue] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container maxWidth={"50px"}>
      {props.label != null && <Label>{props.label}</Label>}

      <SelectContainer>
        Teste
      </SelectContainer>

      <OptionsContainer>
        {isOpen && (
          props.options.map((option, key) => {
            return (
              <div key={key}>{option.text}</div>
            )
          })
        )}
      </OptionsContainer>
    </Container>
  );
};