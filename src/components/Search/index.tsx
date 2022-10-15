import { SearchInput } from "./SearchInput";
import { RegionDropdown } from './RegionDropdown';
import { Container } from "./style";
import { ISearchProps } from "../../shared/props/ISearchProps";

export function Search({ setRegion, setSearch }: ISearchProps) {
  return (
    <Container>
      <SearchInput setSearch={setSearch} />
      <RegionDropdown setRegion={setRegion} />
    </Container>
  );
};