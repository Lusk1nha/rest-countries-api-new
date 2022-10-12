import styled from "styled-components";

export const Button = styled.button`
   background: transparent;
   width: auto;

   display: flex;
   align-items: center;
   justify-content: space-between;

   cursor: pointer;
   
   border: 0;
   outline: 0;

   padding: 0 0.2rem;
`;

export const Text = styled.p`
   color: ${props => props.theme.colors.textColor};
   font-size: ${props => props.theme.fontSize.sm};
   margin-left: 0.675rem;
`;