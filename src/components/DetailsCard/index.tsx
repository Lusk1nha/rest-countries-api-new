import { FlagContainer, FlagImage, Informations, Name, SubInformations, Label, InformationLabel, BorderContainer, BorderLabel, BorderContent } from "./style";
import { BorderButton } from './../Buttons/BorderButton/index';
import { Fragment } from 'react';
import { IDetailsCardProps } from "../../shared/props/IDetailsCardProps";

export function DetailsCard({ data }: IDetailsCardProps) {
  /**
   * Render borders buttons
   * @returns Component of the border buttons
   */
  const renderBorders = () => {
    if(!data?.borders?.length) {
      return 'No borders'
    };

    return data.borders.map((name, index) => {
      return <BorderButton key={index} name={name} />
    }
  )};

  /**
   * Return all the values of an Object
   * @param obj Generic Object
   * @returns Return the values
   */
  const getValues = (obj: object) => Object.values(obj);

  /**
   * Return all currencies used in the country
   * @param array Generic array
   * @returns {string} Return currencies
   */
  const currencies = (array: any) => array.map((el: any) => el?.name);

  /**
   * Return the population formated with commas - https://cutt.ly/eB6B445
   * @param total Total of population
   * @returns Return the population with commas
   */
  const addCommasInPopulation = (total: number) => total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <Fragment>
      <FlagContainer>
        <FlagImage src={data.flags.svg ?? data.flags.png} alt={`Flag of ${data.name.common}`} title={data.name.common} />
      </FlagContainer>

      <Informations>
        <Name>{data.name.common}</Name>

        <SubInformations>
          <Label>
            <InformationLabel>Native Name:</InformationLabel>
            {data.name.common ?? 'Not Found'}
          </Label>

          <Label>
            <InformationLabel>Population:</InformationLabel>
            {data.population != null ? addCommasInPopulation(data.population) : 'Not found'}
          </Label>

          <Label>
            <InformationLabel>Region:</InformationLabel>
            {data.region}
          </Label>

          <Label>
            <InformationLabel>Sub Region:</InformationLabel>
            {data.subregion}
          </Label>

          <Label>
            <InformationLabel>Capital</InformationLabel>
            {data.capital}
          </Label>
        </SubInformations>

        <SubInformations>
          <Label>
            <InformationLabel>Top Level Domain:</InformationLabel>
            {data.tld != null ? data.tld.join(', ') : 'Nothing found' }
          </Label>

          <Label>
            <InformationLabel>Currencies:</InformationLabel>
            {currencies(getValues(data.currencies)).join(', ')}
          </Label>

          <Label>
            <InformationLabel>Languages</InformationLabel>
            {getValues(data.languages).join(', ')}
          </Label>
        </SubInformations>

        <BorderContainer>
          <BorderLabel>Border Countries:</BorderLabel>

          <BorderContent>
            {renderBorders()}
          </BorderContent>
        </BorderContainer>
      </Informations>
    </Fragment>
  )
}