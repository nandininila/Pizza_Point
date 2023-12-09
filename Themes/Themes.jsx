import { ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ThemeContext } from "../common/contexts/ThemeModeProvider";

const font = "'Poppins', sans-serif";

const Themes = ({ children }) => {
  const { themeLight } = useContext(ThemeContext);

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        mobileS: 320,
        mobileM: 375,
        mobileL: 425,
        mobile: 640,
        tablet: 768,
        laptop: 1024,
      },
    },

    palette: {
      mode: themeLight ? "light" : "dark",

      // primary: {
      //   light: "#757ce8",
      //   main: "#3f50b5",
      //   dark: "#002884",
      //   contrastText: "#fff",
      // },
      // secondary: {
      //   light: "#ff7961",
      //   main: "#f44336",
      //   dark: "#ba000d",
      //   contrastText: "#000",
      // },
      // error: {
      //   light: "#ef5350",
      //   main: "#d32f2f",
      //   dark: "#c62828",
      //   contrastText: "#fff",
      // },
      // warning: {
      //   light: "#ff9800",
      //   main: "#ed6c02",
      //   dark: "#e65100",
      //   contrastText: "#fff",
      // },
      // info: {
      //   light: "#03a9f4",
      //   main: "#0288d1",
      //   dark: "#01579b",
      //   contrastText: "#fff",
      // },
      // success: {
      //   light: "#4caf50",
      //   main: "#2e7d32",
      //   dark: "#1b5e20",
      //   contrastText: "#fff",
      // },

      text: {
        1: "#272d2e",
        2: "#db2527",
      },

      bg: {
        1: "#eaeaea",
        2: "#d50306",
        3: "#da9942",
        4: "#efcc97",
        5: "#ffdf99",
        6: "#fcfbff",
      },

      border: {
        1: "#ebebeb",
      },

      button: {
        1: "#ffcf29",
      },
    },
  });

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Themes;
