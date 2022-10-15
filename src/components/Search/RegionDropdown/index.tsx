import { FormEvent, useState } from "react";
import { IRegionDropdownState } from "../../../shared/states/IRegionDropdownState";
import { Dropdown } from "../../Dropdown";
import { Container, SelectContainer, OptionContainer, OptionPlaceholder } from "./style";

const DEFAULT_OPTIONS: IRegionDropdownState[] = [
  { value: 'Africa', text: 'Africa' },
  { value: 'America', text: 'America' },
  { value: 'Asia', text: 'Asia' },
  { value: 'Europe', text: 'Europe' },
  { value: 'Oceania', text: 'Oceania' },
]

export function RegionDropdown() {
  const [selected, setSelected] = useState<string | number | null>(null);

  const handleRegionChange = (event: FormEvent<HTMLSelectElement>) => {
    const value = event.currentTarget.value;

    if (value != selected) {
      console.log('Region: ', value)
      setSelected(
        value
      );
    };
  };

  return (
    <Container>
      <Dropdown options={DEFAULT_OPTIONS} label="Teste" />
      {/* <SelectContainer onChange={handleRegionChange} defaultValue="">
        <OptionPlaceholder>
          Filter by Region
        </OptionPlaceholder>
        {options.map((option, key) => {
          return (
            <OptionContainer value={option.value} key={key}>
              {option.text}
            </OptionContainer>
          )
        })}
      </SelectContainer> */}
    </Container>
  );
}