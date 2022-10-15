import { FormEvent, useState } from "react";
import { MagnifyingGlassIcon } from "../../Icons/MagnifyingGlassIcon";
import { Container, IconContainer, Input, StyledMagnifyingGlassIcon } from "./style";

export function SearchInput() {
  const [value, setValue] = useState<string>('')


  /**
   * Method to handle search input change.
   * @param event Input event
   */
  const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
    const text: string = event.currentTarget.value;

    if(text != value) {
      setValue(
        text
      );
    };
  };


  return (
    <Container>
      <IconContainer>
        <StyledMagnifyingGlassIcon w="18px" h="18px" />
      </IconContainer>

      <Input value={value} onChange={handleSearchChange} />
    </Container>
  );
}