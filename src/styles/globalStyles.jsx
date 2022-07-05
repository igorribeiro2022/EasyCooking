import { createGlobalStyle } from "styled-components";

const lightTheme = {
    colorOne: "#000000",
    colorTwo: "#ffffffff",
    backgroundColorOne: "#f6f4f6ff",
    backgroundColorTwo: "#ea1d2cff",
    greenOne: "#f3ffc6ff",
    greenTwo: "#b6d048ff",
    translucideBlack: "rgba(0,0,0,0.4)",
    button: {
        textColor: "#ffffff",
        backgroundColor: "#ea1d2cff",
    },
};

const darkTheme = {
    colorOne: "#ffffffff",
    colorTwo: "#ffffffff",
    backgroundColorOne: "#121212ff",
    backgroundColorTwo: "#cd131fff",
    greenOne: "#607a00ff",
    greenTwo: "#2a310cff",
    translucideBlack: "rgba(0,0,0,0.4)",
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
    background-color: ${(props) => props.theme.backgroundColorOne};
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
  }

`;

