import styled from "styled-components";

export const Container = styled.nav`
   background: ${props => props.theme.colors.navbarColor};
   width: 100%;
   height: 80px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   padding: 1rem 1.875rem;
   
   box-shadow: 0 3px 0.2rem 0 rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h2`
   color: ${props => props.theme.colors.textColor};
   font-size: ${props => props.theme.fontSize.sm};
   font-family: ${props => props.theme.fonts.heading};
`;