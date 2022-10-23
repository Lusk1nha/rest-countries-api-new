import { IRenderCountriesProps } from "../../shared/props/IRenderCountriesProps";
import { Card } from "../Card";
import { Container } from "./style";

export function RenderCountries({ countries }: IRenderCountriesProps) {
  return (
    <Container>
      {countries.map(country => {
        return (
          <Card key={country.cca3} {...country} />
        );
      })}
    </Container>
  )
};