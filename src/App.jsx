import { GlobalStyle } from "./styles/globalStyles";
import { themes } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { GlobalThemeContext } from "./Providers/models/theme/theme";
import { useContext } from "react";
import RoutesApp from "./routes";


function App() {
  const { currentTheme } = useContext(GlobalThemeContext);

  return (
    <ThemeProvider theme={themes[currentTheme]}>
      <>
        <GlobalStyle />
        <RoutesApp/>
      </>
    </ThemeProvider>
  );
}

export default App;
