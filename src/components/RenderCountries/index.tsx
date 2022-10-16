import { IRenderCountriesProps } from "../../shared/props/IRenderCountriesProps";
import { Card } from "../Card";
import { Container } from "./style";

export function RenderCountries(props: IRenderCountriesProps) {
  const renderCountries = () => {
    return props.countries.map((country, id) => {
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