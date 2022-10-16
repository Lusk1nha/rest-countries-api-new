import { ICountry } from "../../shared/props/ICountriesProps";
import { Container, FlagImageContainer, FlagImage, Informations, Name, SubInformations, InformationLabel } from "./style";

export function Card(props: ICountry) {
  return(
    <Container>
      <FlagImageContainer>
        <FlagImage src={props.flags.svg} alt={`Flag of ${props.name.common}`} title={props.name.common} />
      </FlagImageContainer>

      <Informations>
        <Name>{props.name.common}</Name>

        <SubInformations>
          <InformationLabel>Population:</InformationLabel> 
          {props.population}
        </SubInformations>

        <SubInformations>
          <InformationLabel>Region:</InformationLabel>
          {props.region}
        </SubInformations>

        <SubInformations>
          <InformationLabel>Capital:</InformationLabel> 
          {props.capital}
        </SubInformations>
      </Informations>
    </Container>
  );
};