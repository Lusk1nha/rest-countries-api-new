import styled from "styled-components";

export const StyledApp = styled.div`
  background: ${props => props.theme.colors.bgColor};
  width: 100%;
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;