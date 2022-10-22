import { Fragment, useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { Navbar } from "./components/Navbar";

import GlobalStyles from "./styles/globalStyles";
import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";

const StyledApp = styled.div`
  background: ${props => props.theme.colors.bgColor};
  width: 100%;
  
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyles />

        <StyledApp>
          <Navbar />
            <Routes>
              <Route path="/"  index element={<HomePage />} />
              <Route path="details/:code" element={<Details />} />
            </Routes>
        </StyledApp>
      </ThemeContextProvider>
    </Fragment>
  );
}
