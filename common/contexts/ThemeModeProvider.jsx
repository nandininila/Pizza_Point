import { createContext, useState } from "react";

const ThemeModeProvider = ({ children }) => {
  const [themeLight, setThemeType] = useState(true);
  const [allData, setAllData] = useState([]);
  const [allShuffledData, setAllShuffledData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("pizza");

  const themeValue = {
    themeLight,
    setThemeType,

    allData,
    setAllData,

    selectedCategory,
    setSelectedCategory,

    allShuffledData,
    setAllShuffledData,
  };

  return (
    <ThemeContext.Provider value={themeValue}>{children}</ThemeContext.Provider>
  );
};

export const ThemeContext = createContext();

export default ThemeModeProvider;
