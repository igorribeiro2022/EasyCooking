import { GlobalStyle } from "./styles/globalStyles";
import { themes } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { GlobalThemeContext } from "./Providers/models/theme/theme";
import { useContext } from "react";

function App() {
  const { currentTheme } = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <>
        <GlobalStyle />
        <h1>Hello Easy Cooking</h1>
        <p>Cozinhando fácil!</p>
      </>
    </ThemeProvider>
  );
}

export default App;
