import { useEffect, useState } from "react";
import { Search } from "../../components/Search";
import { Container } from "./style";

export function HomePage() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);

  useEffect(() => {

  }, [search, region])

  return (
    <Container>
      <Search setSearch={setSearch} setRegion={setRegion} />
      
    </Container>
  );
};