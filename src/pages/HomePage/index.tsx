import { useEffect, useMemo, useState } from "react";

import { RenderSkeletonCards } from "../../components/Loadings/RenderSkeletonCards";
import { NothingFound } from "../../components/NothingFound";
import { RenderCountries } from "../../components/RenderCountries";
import { Search } from "../../components/Search";
import { Container, Center, NothingFoundContainer } from "./style";

import { CountriesRepo } from "../../shared/repositories/CountriesRepo";

import { ICountry } from "../../shared/props/ICountriesProps";

export function HomePage() {
  const [countries, setCountries] = useState<ICountry[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [search, setSearch] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);

  const filteredCountries = useMemo(() => {
    if (!search)
      return countries;

    return filterCountries(countries);
  }, [search, countries]);

  const countriesRepo = new CountriesRepo();

  useEffect(() => {
    const getCountriesData = async () => {
      const allCountries = await countriesRepo.getAll();
      const sortedCountries = await sortCountries(allCountries);

      setCountries(sortedCountries);

      setTimeout(() => {
        setIsLoading(false);
      }, 500);
    };

    getCountriesData()
      .catch(error => {
        console.error(error)
      });
  }, []);

  /**
   * Handle the countries filtering and sorting.
   * @param countries Array with the countries.
   * @returns  Return the countries filtering and sorting.
   */
  function filterCountries(countries?: ICountry[] | null): ICountry[] {
    if (countries != null) {
      const filterCountriesByText = filteringCountries(countries);
      const sortFoundCountries = sortCountries(filterCountriesByText);

      return sortFoundCountries
    };

    return [];
  };

  /**
   * Handle countries by filtering per Region or Search text by user.
   * @param countries Array with the countries.
   * @returns Return the countries filtered by Region and Search.
   */
  function filteringCountries(countries: ICountry[]) {
    const filterByRegion = countries.filter(country => {
      if (region != null && region != 'All') {
        const regionToUpper = region.toUpperCase();

        if (country.region.toUpperCase() == regionToUpper)
          return true

        return false
      };

      return true;
    });


    const filterBySearch = filterByRegion.filter(country => {
      if (search != null) {
        const searchToUpper = search.toUpperCase();

        if (country.name.common.toUpperCase().includes(searchToUpper))
          return true;

        return false;
      };

      return true;
    });

    return filterBySearch;
  };

  /**
   * Sort the countries by their names in ascendent order.
   * @param countries Array with the countries.
   * @returns Return the sort 
   */
  function sortCountries(countries: ICountry[]) {
    return countries
      .sort((a, b) => a.name.common.localeCompare(b.name.common));
  };


  /**
   * Render the component based in states.
   * @returns Return the component.
   */
  const RenderContent = () => {
    if (isLoading) {
      return <RenderSkeletonCards totalCards={8} />
    };

    if (filteredCountries != null && filteredCountries.length > 0) {
      return <RenderCountries countries={filteredCountries} isLoading={isLoading} totalCards={16} />
    };

    if (filteredCountries != null && filteredCountries.length == 0) {
      return (
        <NothingFoundContainer>
          <NothingFound text="No country found" />
        </NothingFoundContainer>
      );
    };
  };

  return (
    <Container>
      <Center>
        <Search setSearch={setSearch} setRegion={setRegion} isDisabled={isLoading} />

        {RenderContent()}
      </Center>
    </Container>
  );
};