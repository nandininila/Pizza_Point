import Themes from "@/Themes/Themes";
import { CssBaseline } from "@mui/material";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import ThemeModeProvider from "../contexts/ThemeModeProvider";

const Layout = ({ children }) => {
  return (
    <ThemeModeProvider>
      <Themes>
        <CssBaseline enableColorScheme />
        <Navbar />
        {children}
        <Footer />
      </Themes>
    </ThemeModeProvider>
  );
};

export default Layout;
