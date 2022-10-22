import { IRenderCountriesProps } from "../../shared/props/IRenderCountriesProps";
import { Card } from "../Card";
import { Container } from "./style";

export function RenderCountries({ countries }: IRenderCountriesProps) {
  const renderCountries = () => {
    return countries.map((country, id) => {
      return (
        <Card key={id} {...country} />
      );
    });
  };

  return (
    <Container>
      {renderCountries()}
    </Container>
  )
};