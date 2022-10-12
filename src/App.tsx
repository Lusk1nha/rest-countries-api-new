import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { base, light, dark } from "./styles/themes";

const themesMap: any = {
  light,
  dark
};

export default function App() {
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const theme = { ...base, colors: themesMap[currentTheme] };
  
  useEffect(() => {

  }, [currentTheme])

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        
      </ThemeProvider>
    </div>
  );
}
