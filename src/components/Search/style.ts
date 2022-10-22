import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  height: auto;
  
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  row-gap: 3rem;

  margin: 1.5rem 0 2.5rem;

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;