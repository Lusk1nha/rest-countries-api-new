import { FormEvent, useEffect, useState } from "react";
import { Container, IconContainer, Input, StyledMagnifyingGlassIcon, MagnifyingGlassIconContainer } from "./style";
import { ISearchInputProps } from '../../../shared/props/ISearchInputProps';

export function SearchInput({ setSearch, isDisabled }: ISearchInputProps) {
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
    <Container disabled={isDisabled}>
      <IconContainer>
        <MagnifyingGlassIconContainer>
          <StyledMagnifyingGlassIcon />
        </MagnifyingGlassIconContainer>
      </IconContainer>

      <Input value={value} onChange={handleSearchChange} />
    </Container>
  );
}