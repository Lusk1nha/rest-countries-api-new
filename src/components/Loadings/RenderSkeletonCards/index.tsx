import { IRenderCountriesProps } from "../../../shared/props/IRenderCountriesProps";
import { IRenderSkeletonProps } from "../../../shared/props/IRenderSkeletonProps";
import { SkeletonCard } from "../../Skeletons/SkeletonCard";
import { Container } from "./style";

export function RenderSkeletonCards({ totalCards }: IRenderSkeletonProps) {
  const renderSkeletons = () => {
    return [...Array(totalCards)].map((_, index) => {
      return (
        <SkeletonCard key={index} />
        )
      })
    };

  return (
    <Container>
      {renderSkeletons()}
    </Container>
  )
};