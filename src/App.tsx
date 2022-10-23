import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContextProvider } from "./contexts/theme/ThemeContextProvider";

import { Navbar } from "./components/Navbar";
import { HomePage } from "./pages/HomePage";
import { Details } from "./pages/Details";

import GlobalStyles from "./styles/globalStyles";
import { StyledApp } from "./styles/app";
import { NotFoundPage } from './pages/NotFound/index';

export default function App() {
  return (
    <Fragment>
      <ThemeContextProvider>
        <GlobalStyles />

        <StyledApp>
          <Navbar title="Where in the world?" />
            <Routes>
              <Route path="/" index element={<HomePage />} />
              <Route path="details/:code" element={<Details />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </StyledApp>
      </ThemeContextProvider>
    </Fragment>
  );
}
