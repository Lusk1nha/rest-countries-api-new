import { FlagContainer, FlagImage, Informations, Name, SubInformations, Label, InformationLabel, BorderContainer, BorderLabel, BorderContent, Wrapper, NoBorderFoundContent } from "./style";
import { BorderButton } from './../Buttons/BorderButton/index';
import { Fragment } from 'react';
import { IDetailsCardProps } from "../../shared/props/IDetailsCardProps";
import { Utils } from './../../utils/Utils';

export function DetailsCard({ data }: IDetailsCardProps) {
  const { addCommasInPopulation, getValues, getCurrencies } = new Utils();

  /**
   * Render all borders buttons
   * @returns Component of the border buttons
   */
  const renderBorders = () => {
    if (!data?.borders?.length) {
      return <NoBorderFoundContent>No borders countries found</NoBorderFoundContent>
    };

    return data.borders.map((name, index) => {
      return <BorderButton key={index} name={name} />
    })
  };


  return (
    <Fragment>
      <FlagContainer>
        <FlagImage src={data.flags.svg ?? data.flags.png} alt={`Flag of ${data.name.common}`} title={data.name.common} />
      </FlagContainer>

      <Informations>
        <Name>{data.name.common}</Name>

        <Wrapper>
          <SubInformations>
            <Label>
              <InformationLabel>Native Name:</InformationLabel>
              {data.name.common ?? 'Not Found'}
            </Label>

            <Label>
              <InformationLabel>Population:</InformationLabel>
              {
                data.population != null
                  ? addCommasInPopulation(data.population)
                  : 'Not found'
              }
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
              {
                data.tld != null
                  ? data.tld.join(', ')
                  : 'Nothing found'
              }
            </Label>

            <Label>
              <InformationLabel>Currencies:</InformationLabel>
              {
                getCurrencies(getValues(data.currencies))
                  .join(', ')
              }
            </Label>

            <Label>
              <InformationLabel>Languages</InformationLabel>
              {
                getValues(data.languages)
                  .join(', ')
              }
            </Label>
          </SubInformations>
        </Wrapper>

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