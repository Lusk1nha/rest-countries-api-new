import { createContext, useCallback, useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";
import { IThemeContextProvider } from "../../shared/props/IThemeContextProvider";
import { IThemeContext } from "./IThemeContext";


import { base, light, dark } from "../../styles/themes";

const themeLocalStorage = localStorage.getItem('theme');
const DEFAULT_THEME = themeLocalStorage ?? 'light';
export const ThemeContext = createContext<IThemeContext | null>(null);

const themesMap: any = {
  light,
  dark
};

export function ThemeContextProvider({ children }: IThemeContextProvider) {
  const [theme, setTheme] = useState<string>(DEFAULT_THEME);
  const themeSchema = { ...base, colors: themesMap[theme] };

  useEffect(() => {
    localStorage.setItem('theme', theme);
    console.log(`Salvando tema ${theme} no LocalStorage`)
  }, [theme])

  const handleThemeChange = useCallback((value?: string) => {
    setTheme(
      value ??
      theme === 'light'
        ? 'dark'
        : 'light'
    )
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <ThemeProvider theme={themeSchema}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}