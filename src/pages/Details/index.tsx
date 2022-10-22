import { useParams } from "react-router";
import { BackButton } from "../../components/Buttons/BackButton";
import { BackButtonContainer, Center, Container, Content } from "./style";
import { useEffect, useState } from 'react';
import { CountriesRepo } from "../../shared/repositories/CountriesRepo";
import { ICountry } from './../../shared/props/ICountriesProps';
import { DetailsCard } from "../../components/DetailsCard";
import { SkeletonDetailsCard } from './../../components/Skeletons/SkeletonDetailsCard/index';

export function Details() {
  const { code } = useParams<{ code?: string }>();
  const [country, setCountry] = useState<ICountry | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const countriesRepo = new CountriesRepo();

  useEffect(() => {
    const getData = async () => {
      if(code != null) {
        const country = await countriesRepo.getInfo(code);
      
        setCountry(country[0]);

        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };

    setIsLoading(true);
    getData();
  }, [code]);

  return (
    <Container>
      <Center>
        <BackButtonContainer>
          <BackButton />
        </BackButtonContainer>

        <Content>
          { isLoading || country == null ? <SkeletonDetailsCard /> : <DetailsCard data={country} /> }
        </Content>
      </Center>
    </Container>
  )
}