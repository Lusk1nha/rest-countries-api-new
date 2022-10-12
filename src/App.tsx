import { Fragment, useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
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
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const theme = { ...base, colors: themesMap[currentTheme] };

  const handleAppThemeChanging = () => {
    setCurrentTheme(
      currentTheme == 'light'
      ? 'dark'
      : 'light'
    );
  };

  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <StyledApp>
          
        </StyledApp>
      </ThemeProvider >
    </Fragment>
  );
}
