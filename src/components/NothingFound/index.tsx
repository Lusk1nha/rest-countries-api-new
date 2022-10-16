import { INothingFoundProps } from "../../shared/props/INothingFoundProps";
import { Container, Text } from "./style";

export function NothingFound({ text }: INothingFoundProps) {
  return (
    <Container>
      <Text>
        {text}
      </Text>
    </Container>
  );
};