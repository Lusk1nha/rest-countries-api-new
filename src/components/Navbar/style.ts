import styled from "styled-components";

export const Container = styled.nav`
  background: ${props => props.theme.colors.navbarColor};
  width: 100%;
  height: 80px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 1.875rem;
  
  box-shadow: 0 3px 0.2rem 0 rgba(0, 0, 0, 0.05);
`;

export const Content = styled.section`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 900px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h2`
  color: ${props => props.theme.colors.textColor};
  font-size: 0.875rem;
  font-family: ${props => props.theme.fonts.heading};
  text-align: center;

  @media screen and (min-width: 900px) {
    font-size: 1.5rem;
  }
`;