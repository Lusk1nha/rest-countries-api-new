import styled from "styled-components";

export const Container = styled.section`
  width: auto;
  height: auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

export const Text = styled.p`
  font-size: 2rem;
  color: ${props => props.theme.colors.textColor};
`;