import { Box, CssBaseline } from "@mui/material";
import Cookies from "js-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Themes from "../../Themes/Themes";
import { setUser } from "../../redux/authSlice";
import Footer from "../components/shared/Footer/Footer";
import Navbar from "../components/shared/Navbar/Navbar";
import ThemeModeProvider from "../contexts/ThemeModeProvider";
import { numberToString } from "../types/utils/convert/numberToString";

const Layout = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const encodedUserInfo = Cookies.get("userInfo");

    if (encodedUserInfo) {
      const userInfo = numberToString(encodedUserInfo);
      const user = JSON.parse(userInfo);
      dispatch(setUser(user));
    }
  }, [dispatch]);

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
