import { ICountry } from "../../shared/props/ICountriesProps";
import { Container, FlagImageContainer, FlagImage, Informations, Name, SubInformations, InformationLabel } from "./style";
import { useNavigate } from 'react-router';

export function Card(props: ICountry) {
  const navigate = useNavigate();
  
  const handleClick = () => {
    const newPath = `/details/${props.cca3.toLowerCase()}`
    navigate(newPath);
  };

  return(
    <Container onClick={handleClick}>
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