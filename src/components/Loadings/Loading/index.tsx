import { ILoadingProps } from "../../../shared/props/ILoadingProps";
import { Container, Spinner, Label } from "./style";

export function Loading({ width, height, label }: ILoadingProps) {
  return (
    <Container>
      <Spinner w={width} h={height} />
      <Label>
        {label}
      </Label>
    </Container>
  );
};