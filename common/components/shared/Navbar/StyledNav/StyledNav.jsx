import {
  Badge,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";

import ArticleIcon from "@mui/icons-material/Article";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import EventIcon from "@mui/icons-material/Event";
import HomeIcon from "@mui/icons-material/Home";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import StoreIcon from "@mui/icons-material/Store";
import WidgetsIcon from "@mui/icons-material/Widgets";
import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";

import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../../contexts/ThemeModeProvider";
import { frontendOrigin } from "../../../../types/utils/const";
import AccountMenu from "./AccountMenu/AccountMenu";
import Logo from "./Logo/Logo";

const NavLinks = [
  // { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Offers", href: "/offers" },
  { name: "Store", href: "/store" },
];

const NavDrawerData = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Products", icon: <StoreIcon /> },
  { name: "Menu", icon: <WidgetsIcon /> },
  { name: "Events", icon: <EventIcon /> },
  { name: "Blog", icon: <ArticleIcon /> },
  { name: "Contact", icon: <ContactPageIcon /> },
];

const NavLink = styled("div")(({ theme }) =>
  theme.unstable_sx({
    [theme.breakpoints.down("tablet")]: {
      display: "none",
    },

    p: ".2em 0",

    "& a": {
      p: "0 .5em",
      typography: "subtitle2",
      fontWeight: "300",
      color: "inherit",

      "&:hover": {
        color: "text.2",
        fontWeight: "500",
      },
    },
  })
);

const NavDrawer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: { xs: "70vw", sm: "50vw", tablet: "30vw" },
  })
);

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "4.5rem",
  })
);

const StyledNav = () => {
  // redux
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const quantity = useSelector((state) => state.cart.quantity);

  const { themeLight, setThemeType } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setThemeType(!themeLight);
  };

  const [open, setOpen] = useState(false);
  const router = useRouter();
  const route = router?.route;
  const fullPath = `${frontendOrigin}${route}`;

  const currentRoute = (index, link) => {
    if (index === 0) {
      return route === link;
    } else {
      return fullPath.match(frontendOrigin + link);
    }
  };
  currentRoute();

  return (
    <Main>
      <Container>
        <Box width={{ xs: "70%", tablet: "40%" }}>
          <Logo />
        </Box>

        {NavLinks.map((link, i) => (
          <NavLink
            key={i}
            sx={{
              textDecoration: currentRoute(i, link.href) ? "underline" : "none",
              textDecorationColor: currentRoute(i, link.href)
                ? "#db2527"
                : "initial",
              textDecorationThickness: "0.1rem",
              textUnderlineOffset: ".5rem",
            }}
          >
            <Typography
              component={"a"}
              href={link?.href}
              style={{
                color: currentRoute(i, link.href) ? "#db2527" : null,
                fontWeight: currentRoute(i, link.href) ? "500" : null,
              }}
            >
              {link?.name}
            </Typography>
          </NavLink>
        ))}

        <Tooltip title="Cart">
          <Link href="/cart" passHref>
            <IconButton>
              <Badge badgeContent={quantity} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Tooltip>

        <Tooltip title={themeLight ? "Dark Mode" : "Light Mode"}>
          <IconButton onClick={handleThemeToggle}>
            {themeLight ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>

        {!isAuthenticated ? (
          <>
            <Tooltip title="Login">
              <Link href={"/login"}>
                <IconButton
                  size="small"
                  sx={{
                    ml: ".3rem",
                    color: "white",
                    bgcolor: themeLight ? "warning.main" : "warning.dark",
                    ":hover": { color: "white", bgcolor: "warning.dark" },
                  }}
                >
                  <IoMdLogIn />
                </IconButton>
              </Link>
            </Tooltip>

            <Tooltip title="Signup">
              <Link href={"/signup"}>
                <IconButton
                  size="small"
                  sx={{
                    ml: ".8rem",
                    color: "white",
                    bgcolor: "success.main",
                    ":hover": { color: "white", bgcolor: "success.main" },
                  }}
                >
                  <FaRegUser />
                </IconButton>
              </Link>
            </Tooltip>
          </>
        ) : (
          // <Tooltip title="Logout">
          //   <IconButton
          //     onClick={handleLogout}
          //     size="small"
          //     sx={{
          //       ml: ".3rem",
          //       color: "white",
          //       bgcolor: "primary.main",
          //       ":hover": { color: "white", bgcolor: "primary.main" },
          //     }}
          //   >
          //     <MdLogout />
          //   </IconButton>
          // </Tooltip>
          <AccountMenu />
        )}

        <IconButton
          sx={{
            ml: ".6rem",
            display: { xs: "flex", tablet: "none" },
            color: "white",
            bgcolor: "bg.2",
            ":hover": { color: "white", bgcolor: "bg.2" },
          }}
          size="small"
          onClick={() => setOpen(true)}
        >
          <MenuIcon fontSize="inherit" />
        </IconButton>

        {/* drawer */}
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          <NavDrawer onClick={() => setOpen(false)}>
            <Box height={"4.5rem"} display={"flex"} justifyContent={"center"}>
              <Logo />
            </Box>
            <Divider />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <List>
                {NavDrawerData.map((item, index) => (
                  <ListItemButton key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </NavDrawer>
        </Drawer>
      </Container>
    </Main>
  );
};

export default StyledNav;
