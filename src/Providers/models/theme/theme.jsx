import { createContext, useEffect, useState } from "react";

export const GlobalThemeContext = createContext([]);

export function GlobalTheme({ children }) {

  const themeLocal = localStorage.getItem("themeSite") || "light";
  const [currentTheme, setCurrentTheme] = useState(themeLocal);
  const [themeSwitch, setThemeSwitch] = useState(false);
  
  useEffect(() => {
    themeSwitch? setCurrentTheme("dark") : setCurrentTheme("light")
  }, [themeSwitch]) 

  function getOpositeTheme() {
    setThemeSwitch(!themeSwitch)
    
    localStorage.setItem("themeSite", currentTheme === "light" ? "dark" : "light");
  }

  return (
    <GlobalThemeContext.Provider value={{ currentTheme, getOpositeTheme, themeSwitch, setThemeSwitch }}>
      {children}
    </GlobalThemeContext.Provider>
  );
}
