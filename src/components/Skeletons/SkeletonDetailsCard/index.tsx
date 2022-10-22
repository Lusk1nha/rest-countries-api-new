import { Fragment } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { FlagContainer, Informations, SubInformations, Label, BorderContainer, BorderContent } from "./style";

export function SkeletonDetailsCard() {
  return (
    <Fragment>
      <FlagContainer>
        <Skeleton width="100%" height="100%" />
      </FlagContainer>

      <Informations>
        <Skeleton width="40%" height="30px" style={{
          marginBottom: '2rem'
        }} />

        <SubInformations>
          <Label>
            <Skeleton width="45%" height={20}/>
          </Label>
        
          <Label>
            <Skeleton width="50%" height={20}/>
          </Label>
          
          <Label>
            <Skeleton width="35%" height={20}/>
          </Label>

          <Label>
            <Skeleton width="45%" height={20}/>
          </Label>

          <Label>
            <Skeleton width="40%" height={20}/>
          </Label>

        </SubInformations>

        <SubInformations>
          <Label>
            <Skeleton width="50%" height={20}/>
          </Label>

          <Label>
            <Skeleton width="40%" height={20}/>
          </Label>

          <Label>
            <Skeleton width="60%" height={20}/>
          </Label>
        </SubInformations>

        <BorderContainer>
          <Skeleton width={140} height={20} style={{
            marginBottom: '1rem'
          }} />

          <BorderContent>
            <Skeleton width={104} height={30} style={{ justifySelf: 'center' }} />
            <Skeleton width={104} height={30} style={{ justifySelf: 'center' }} />
            <Skeleton width={104} height={30} style={{ justifySelf: 'center' }} />
          </BorderContent>
        </BorderContainer>
      </Informations>
    </Fragment>
  );
};
