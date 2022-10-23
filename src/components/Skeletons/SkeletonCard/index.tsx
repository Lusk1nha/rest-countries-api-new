import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Container, FlagImageContainer, Informations } from "./style";

export function SkeletonCard() {

  return (
    <Container>
      <FlagImageContainer>
        <Skeleton height={160} />
      </FlagImageContainer>

      <Informations>
        <Skeleton width="75%" height={30} style={{ marginBottom: '10px' }} />
        <Skeleton width="60%" count={3} height={20} style={{ marginBottom: '5px' }} />
      </Informations>
    </Container>
  );
}