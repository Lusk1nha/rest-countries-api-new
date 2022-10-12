import { Button, Text } from "./style";
import { MoonIcon } from "../../Icons/MoonIcon";

import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme/ThemeContextProvider";
import { FilledMoonIcon } from "../../Icons/FilledMoonIcon";

export function ButtonThemeChanger() {
   const themeContext = useContext(ThemeContext);

   const handleButtonClick = () => themeContext?.handleThemeChange();
   
   return (
      <Button type="button" onClick={handleButtonClick}>
         { themeContext?.theme === 'light' ? <MoonIcon w="15pt" h="100%" /> : <FilledMoonIcon w="25pt" h="100%" pathColor="white" /> }
         <Text>Dark Mode</Text>
      </Button>
   );
}