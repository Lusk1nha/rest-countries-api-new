import { IThemeChangerProps } from "../../../shared/props/IThemeChangerProps";
import { MoonIcon } from "../../Icons/MoonIcon";
import { Button, Text } from "./style";

export function ButtonThemeChanger({ theme, setTheme }: IThemeChangerProps) {
   
   /**
    * Button to handle theme changing click. 
    */
   const handleClick = () => {
      setTheme(
         theme === 'light'
         ? 'dark'
         : 'light'
      )
   };
   
   return (
      <Button type="button" onClick={handleClick}>
         <MoonIcon w="20px" h="20px" />
         <Text>Dark Mode</Text>
      </Button>
   );
}