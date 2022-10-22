import { ButtonThemeChanger } from "../Buttons/ThemeChanger";
import { Container, Content, Title } from "./style";

export function Navbar() {
  return (
    <Container>
      <Content>
        <Title>Where in the world?</Title>
        <ButtonThemeChanger />
      </Content>
    </Container>
  );
};