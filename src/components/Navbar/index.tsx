import { ButtonThemeChanger } from "../Buttons/ThemeChanger";
import { Container, Content, Title } from "./style";
import { INavbarProps } from './../../shared/props/INavbarProps';

export function Navbar({ title }: INavbarProps) {
  return (
    <Container>
      <Content>
        <Title>{title}</Title>
        <ButtonThemeChanger />
      </Content>
    </Container>
  );
};