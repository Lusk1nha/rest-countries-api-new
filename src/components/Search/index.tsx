import { SearchInput } from "./SearchInput";
import { RegionDropdown } from './RegionDropdown';
import { Container } from "./style";

export function SearchContainer() {
  return (
    <Container>
      <SearchInput />
      <RegionDropdown />
    </Container>
  );
}