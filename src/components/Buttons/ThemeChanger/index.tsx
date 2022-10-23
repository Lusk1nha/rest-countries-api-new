import { Button, MoonIconContainer, StyledMoonIcon, FilledMoonIconContainer, StyledFilledMoonIcon, Text } from "./style";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme/ThemeContextProvider";

export function ButtonThemeChanger() {
  const themeContext = useContext(ThemeContext);

  const handleButtonClick = () => themeContext?.handleThemeChange();

  return (
    <Button type="button" onClick={handleButtonClick} title="Click here to change page theme color" aria-label="Button to change theme color">
      {themeContext?.theme === 'light'
        ? (
          <MoonIconContainer>
            <StyledMoonIcon />
          </MoonIconContainer>
        )
        : (
          <FilledMoonIconContainer>
            <StyledFilledMoonIcon />
          </FilledMoonIconContainer>
        )
      }
      <Text>Dark Mode</Text>
    </Button>
  );
}