import { Fragment, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { Navbar } from "./components/Navbar";

import GlobalStyles from "./styles/globalStyles";
import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";
import { HomePage } from "./pages/HomePage";
import { Detail } from "./pages/Detail";

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
          
          <BrowserRouter>
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="detail" element={<Detail />} />
            </Routes>
          </BrowserRouter>
        </StyledApp>
      </ThemeContextProvider>
    </Fragment>
  );
}
