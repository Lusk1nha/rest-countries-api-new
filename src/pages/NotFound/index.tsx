import { BackButton } from "../../components/Buttons/BackButton";
import { Container, Center, BackButtonContainer, Content, NotFoundMessage } from "./style";

export function NotFoundPage() {

  return (
    <Container>
      <Center>
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>

        <Content>
          <NotFoundMessage>
            404 Page not found
          </NotFoundMessage>
        </Content>
      </Center>
    </Container>
  );
}