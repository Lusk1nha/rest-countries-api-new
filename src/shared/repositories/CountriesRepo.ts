import { ICountry } from "../props/ICountriesProps";

export class CountriesRepo {
  public api: string = "https://restcountries.com/v3.1/";
  
  public async getAll(): Promise<Array<ICountry>> {
    const endpoint: string = "all"
    
    try {
      const response = await fetch(this.api + endpoint); 
      const data: ICountry[] = await response.json();

      return data;
    } catch(error) {
      console.error(error);
      return []
    };
  };

  public getInfo() {

  };
};