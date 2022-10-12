import { INavbarProps } from "../../shared/props/INavbarProps";
import { ButtonThemeChanger } from "../Buttons/ThemeChanger";
import { Container, Title } from "./style";

export function Navbar(props: INavbarProps) {
   return (
      <Container>
         <Title>Where in the world?</Title>
         <ButtonThemeChanger theme={props.theme} setTheme={props.setTheme} />
      </Container>
   );
};