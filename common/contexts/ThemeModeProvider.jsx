import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeModeProvider = ({ children }) => {
  const [themeLight, setThemeType] = useState(true);

  const themeValue = {
    themeLight,
    setThemeType,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export default ThemeModeProvider;
