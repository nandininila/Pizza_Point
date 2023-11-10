import Themes from "@/Themes/Themes";
import { Box, CssBaseline } from "@mui/material";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import ThemeModeProvider from "../contexts/ThemeModeProvider";

const Layout = ({ children }) => {
  return (
    <ThemeModeProvider>
      <Themes>
        <CssBaseline enableColorScheme />
        <Box
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          height={"100vh"}
        >
          <Box>
            <Navbar />
            {children}
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </Themes>
    </ThemeModeProvider>
  );
};

export default Layout;
