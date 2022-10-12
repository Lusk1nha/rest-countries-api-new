import { ButtonThemeChanger } from "../Buttons/ThemeChanger";
import { Container, Title } from "./style";

export function Navbar() {
   return (
      <Container>
         <Title>Where in the world?</Title>
         <ButtonThemeChanger />
      </Container>
   );
};