import { createGlobalStyle } from "styled-components";

const lightTheme = {
    colorOne: "#000000",
    colorTwo: "#ffffffff",
    colorThree: "#E6E6E6",
    colorHeader: "#ffffff",
    background: "#ffffff",
    greenOne: "#f3ffc6ff",
    greenTwo: "#b6d048ff",
    inputColor: "#E2E2E2",
    translucideBlack: "rgba(0,0,0,0.6)",
    button: {
        textColor: "#ffffff",
        backgroundColor: "#ea1d2cff",
    },
};

const darkTheme = {
    colorOne: "#ffffffff",
    colorTwo: "#ffffffff",
    colorThree: "#252525",
    colorHeader: "#252525",
    background: "#121212",
    greenOne: "#607a00ff",
    greenTwo: "#2a310cff",
    inputColor:"#333333",
    translucideBlack: "rgba(0,0,0,0.6)",
    button: {
      textColor: "#ffffffff",
      backgroundColor: "#cd131fff",
    },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.background};
    transition: background-color 0.2s linear, color 0.2s linear;
    color: ${(props) => props.theme.colorOne};
  }

  body::-webkit-scrollbar {
    width: 0px;
  }

  body, input, button, p {
    font-family: inherit, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #015ea0;
  }

`;

