import { SearchInput } from "./SearchInput";
import { RegionDropdown } from './RegionDropdown';
import { Container } from "./style";
import { ISearchProps } from "../../shared/props/ISearchProps";

export function Search({ setRegion, setSearch, isDisabled }: ISearchProps) {
  return (
    <Container>
      <SearchInput setSearch={setSearch} isDisabled={isDisabled} />
      <RegionDropdown setRegion={setRegion} isDisabled={isDisabled} />
    </Container>
  );
};