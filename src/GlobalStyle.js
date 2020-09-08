import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:0;
    outline:0;
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 300;
  }

  body, html, #root {
    height: 100%;
    overflow:hidden;
  }

`;
