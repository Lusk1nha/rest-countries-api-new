import { FormEvent, useEffect, useState } from "react";
import { Container, IconContainer, Input, StyledMagnifyingGlassIcon } from "./style";
import { ISearchInputProps } from '../../../shared/props/ISearchInputProps';

export function SearchInput({ setSearch }: ISearchInputProps) {
  const [value, setValue] = useState<string>('')

  useEffect(() => {
    setSearch(value);
  }, [value]);

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