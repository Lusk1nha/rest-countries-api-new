import { ICountry } from "./ICountriesProps";

export interface IRenderCountriesProps {
  countries: ICountry[];
  isLoading: boolean;
  totalCards?: number;
};