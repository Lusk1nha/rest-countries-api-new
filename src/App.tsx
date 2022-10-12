import { Fragment, useState } from "react";

import styled from "styled-components";

import { Navbar } from "./components/Navbar";

import GlobalStyles from "./styles/globalStyles";
import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.bgColor};
`;

export default function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyles />

        <StyledApp>
          <Navbar />
        </StyledApp>
      </ThemeContextProvider>
    </Fragment>
  );
}
