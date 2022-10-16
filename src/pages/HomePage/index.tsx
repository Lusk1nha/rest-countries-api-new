import { useEffect, useState } from "react";
import { RenderCountries } from "../../components/RenderCountries";
import { Search } from "../../components/Search";
import { ICountry } from "../../shared/props/ICountriesProps";
import { CountriesRepo } from "../../shared/repositories/CountriesRepo";
import { Container } from "./style";

export function HomePage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const countriesRepo = new CountriesRepo();

  useEffect(() => {
    const getData = async () => {
      const data = await countriesRepo.getAll();

      setCountries(data);
      setFilteredCountries(
        data
      )
      setIsLoading(false);
    };

    getData();
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const data = filterCountries();
    setFilteredCountries(
      data
    )
    setIsLoading(false);
  }, [search, region])

  const filterCountries = () => countries.filter(country => {
    if (search != null) {

    };

    if (region != null) {
      if (country.region == region) return true
      return false
    };

    return true
  })

  return (
    <Container>
      <Search setSearch={setSearch} setRegion={setRegion} />
      {isLoading ? (<>Loading</>) : <RenderCountries countries={filteredCountries} />}
    </Container>
  );
};