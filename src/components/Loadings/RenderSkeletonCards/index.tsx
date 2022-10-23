import { IRenderSkeletonProps } from "../../../shared/props/IRenderSkeletonProps";
import { SkeletonCard } from "../../Skeletons/SkeletonCard";
import { Container } from "./style";

export function RenderSkeletonCards({ totalCards }: IRenderSkeletonProps) {
  return (
    <Container>
      {
        [...Array(totalCards)].map((_, index) => {
          return (
            <SkeletonCard key={index} />
          )
        })
      }
    </Container>
  )
};