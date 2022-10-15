import { FormEvent, useState } from "react";
import { IRegionDropdownProps } from "../../../shared/props/IRegionDropdownProps";
import { IRegionDropdownState } from "../../../shared/states/IRegionDropdownState";
import { Dropdown } from "../../Dropdown";
import { Container } from "./style";

const DEFAULT_OPTIONS: IRegionDropdownState[] = [
  { value: 'Africa', text: 'Africa' },
  { value: 'America', text: 'America' },
  { value: 'Asia', text: 'Asia' },
  { value: 'Europe', text: 'Europe' },
  { value: 'Oceania', text: 'Oceania' },
]

export function RegionDropdown({ setRegion }: IRegionDropdownProps) {
  const handleRegionChange = (value: string | null) => {
    setRegion(value);
  };

  return (
    <Container>
      <Dropdown options={DEFAULT_OPTIONS} placeholder="Filter by Region" storeFunction={handleRegionChange} />
    </Container>
  );
}