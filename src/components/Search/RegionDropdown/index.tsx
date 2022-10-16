import { IDropdownOptionsProps } from "../../../shared/props/IDropdownProps";
import { IRegionDropdownProps } from "../../../shared/props/IRegionDropdownProps";
import { Dropdown } from "../../Dropdown";
import { Container } from "./style";

const DEFAULT_OPTIONS: IDropdownOptionsProps[] = [
  { value: 'All', text: 'Show all regions' },
  { value: 'Africa', text: 'Africa' },
  { value: 'Americas', text: 'America' },
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