import { useEffect, useState } from "react";
import { Loading } from "../../components/Loading";
import { NothingFound } from "../../components/NothingFound";
import { RenderCountries } from "../../components/RenderCountries";
import { Search } from "../../components/Search";
import { ICountry } from "../../shared/props/ICountriesProps";
import { CountriesRepo } from "../../shared/repositories/CountriesRepo";
import { Container, LoadingContainer, NothingFoundContainer } from "./style";

export function HomePage() {
  const [countries, setCountries] = useState<ICountry[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<ICountry[]>([]);
  const [search, setSearch] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const countriesRepo = new CountriesRepo();


  useEffect(() => {
    const getData = async () => {
      const allCountries = await countriesRepo.getAll();
      const sortedCountries = await sortCountries(allCountries);

      setCountries(sortedCountries);
      setFilteredCountries(sortedCountries);

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    getData();
  }, []);


  useEffect(() => {
    setIsLoading(true);

    const filteredCountries = filteringCountries(countries);
    const sortedCountries = sortCountries(filteredCountries);
    setFilteredCountries(sortedCountries);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [search, region]);


  const filteringCountries = (countries: ICountry[]) => {
    const filterByRegion = countries.filter(country => {
      if (region != null && region != 'All') {
        const regionToUpper = region.toUpperCase();

        if (country.region.toUpperCase() == regionToUpper) return true
        return false
      };

      return true;
    });


    const filterBySearch = filterByRegion.filter(country => {
      if (search != null) {
        const searchToUpper = search.toUpperCase();

        if (country.name.common.toUpperCase().includes(searchToUpper)) return true;
        if (country.name.official.toUpperCase().includes(searchToUpper)) return true;

        return false
      };

      return true
    });

    return filterBySearch;
  };


  const sortCountries = (countries: ICountry[]) => countries.sort((a, b) => a.name.common.localeCompare(b.name.common));


  const RenderContent = () => {
    if (isLoading) {
      return (
        <LoadingContainer>
          <Loading width="100px" height="100px" label="Loading..." />
        </LoadingContainer>
      );
    };

    if (filteredCountries.length) {
      return (
        <RenderCountries countries={filteredCountries} />
      )
    } else {
      return (
        <NothingFoundContainer>
          <NothingFound text="No country found" />
        </NothingFoundContainer>
      )
    }
  };

  return (
    <Container>
      <Search setSearch={setSearch} setRegion={setRegion} />
      {RenderContent()}
    </Container>
  );
};