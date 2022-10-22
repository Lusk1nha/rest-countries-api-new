import { IRenderCountriesProps } from "../../shared/props/IRenderCountriesProps";
import { Card } from "../Card";
import { Container } from "./style";

export function RenderCountries({ countries, isLoading, totalCards }: IRenderCountriesProps) {
  const renderCountries = () => {
    return countries.map((country, id) => {
      return (
        <Card key={id} {...country} />
      );
    });
  };
    
  console.log(countries, isLoading, totalCards)
  return (
    <Container>
      {renderCountries()}
    </Container>
  )
};