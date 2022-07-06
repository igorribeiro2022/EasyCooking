import { createContext, useState } from "react";

export const GlobalThemeContext = createContext([]);

export function GlobalTheme({ children }) {
  // const themeLocal = localStorage.getItem("themeSite") || "dark";
  const [currentTheme, setCurrentTheme] = useState("dark");

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
