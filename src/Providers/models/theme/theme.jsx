import { createContext, useState } from "react";

export const GlobalThemeContext = createContext([]);

export function GlobalTheme({ children }) {
  const themeLocal = localStorage.getItem("themeSite") || "light";
  const [currentTheme, setCurrentTheme] = useState(themeLocal);

  function getOpositeTheme() {
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");
    localStorage.setItem(
      "themeSite",
      currentTheme === "light" ? "dark" : "light"
    );
  }

  return (
    <GlobalThemeContext.Provider value={{ currentTheme, getOpositeTheme }}>
      {children}
    </GlobalThemeContext.Provider>
  );
}
