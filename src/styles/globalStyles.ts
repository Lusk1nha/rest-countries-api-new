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

  body {
    overflow: hidden;
  }

  #root {
    width: 100%;
    min-height: 100vh;
    height: 100%;
  }
`;

export default GlobalStyle;