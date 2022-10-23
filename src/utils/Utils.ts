import { ICurrencies } from './../shared/props/ICountriesProps';

export class Utils {
  /**
   * Method to format population with commas - https://cutt.ly/eB6B445
   * @param total Total of population
   * @returns {string} Return the population with commas
   */
  public addCommasInPopulation(total: number): string {
    return total
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };


  /**
   * Method to get the values of an Object
   * @param obj Generic Object
   * @returns {string[]} Return the values
   */
  public getValues(obj: object): string[] {
    return Object.values(obj);
  };


  /**
   * Method to get all currencies used in the country
   * @param array Generic array
   * @returns {string[]} Return all currencies in the country.
   */
  public getCurrencies(array: any[]): string[] {
    return array.map((el: ICurrencies) => el.name);
  };
};