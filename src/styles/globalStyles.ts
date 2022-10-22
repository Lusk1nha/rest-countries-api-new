import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: "Nunito Sans", -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    
    transition: 200ms linear background;
  }

  #root, body {
    width: 100%;
    min-height: 100vh;
    height: 100%;

    display: flex;
  }
`;

export default GlobalStyle;