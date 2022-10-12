import { Fragment, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Navbar } from "./components/Navbar";
import GlobalStyles from "./styles/globalStyles";
import { base, light, dark } from "./styles/themes";

const themesMap: any = {
  light,
  dark
};

const StyledApp = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.colors.bgColor};
`;

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const theme = { ...base, colors: themesMap[currentTheme] };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          <Navbar theme={currentTheme} setTheme={setCurrentTheme} />
        </StyledApp>
      </ThemeProvider >
    </Fragment>
  );
}
