import styled from "styled-components";

export const Button = styled.button`
   background: transparent;
   max-width: 125px;
   width: 100%;
   height: 30px;

   display: flex;
   align-items: center;
   justify-content: space-between;

   cursor: pointer;
   
   border: 0;
   outline: 0;

   padding: 0 0.2rem;

   &:focus {
      outline: 2px dashed ${props => props.theme.colors.textColor};
   }
`;

export const Text = styled.p`
   height: 100%;

   color: ${props => props.theme.colors.textColor};
   font-size: ${props => props.theme.fontSize.sm};
   font-weight: 600;

   display: flex;
   align-items: center;

   margin-left: 0.675rem;
`;