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

import { ShoppingCart } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../../../contexts/ThemeModeProvider";
import { createFluidValue } from "../../../../hooks/FluidValue/mix/FluidValue";
import { frontendOrigin } from "../../../../types/utils/const";

const Logo = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    width: { xs: "80%", sm: "40%" },

    "& img": {
      height: "auto",
      width: createFluidValue(1.2, 2.3),
    },
  })
);

const Title = styled("div")(({ theme }) =>
  theme.unstable_sx({
    fontSize: createFluidValue(1.2, 2),
    pl: ".2em",

    "span:first-of-type": {
      fontWeight: "700",
    },

    "span:last-of-type": {
      color: "text.2",
    },
  })
);

const NavLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Menu", href: "/menu" },
  { name: "Offers", href: "/offers" },
  { name: "Store", href: "/store" },
];

const data = [
  { name: "Home", icon: <HomeIcon /> },
  { name: "Products", icon: <StoreIcon /> },
  { name: "Menu", icon: <WidgetsIcon /> },
  { name: "Events", icon: <EventIcon /> },
  { name: "Blog", icon: <ArticleIcon /> },
  { name: "Contact", icon: <ContactPageIcon /> },
];

const NavLink = styled("div")(({ theme }) =>
  theme.unstable_sx({
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },

    p: ".2em 0",

    "& a": {
      p: "0 .5em",
      fontSize: createFluidValue(0.65, 0.85),
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

const NavDrawerLogo = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    py: "1em",
    justifyContent: "center",
    userSelect: "none",
  })
);

const MenuButton = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& button": {
      bgcolor: "bg.2",
      ml: ".2rem",
      fontSize: createFluidValue(0.8, 1.5),

      "&:hover": {
        backgroundColor: "bg.2",
      },

      "& svg": {
        color: "white",
      },
    },
  })
);

const Cart = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& button": {
      fontSize: createFluidValue(1, 1.4),
      "& svg": {
        strokeWidth: ".5em",
      },
    },
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
    height: createFluidValue(3, 5),
  })
);

const StyledNav = () => {
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
        <Logo>
          <img
            src="https://res.cloudinary.com/united1234/image/upload/v1701943139/pizza-point/logo/pizzaLogo_al3tu4.png"
            alt="Logo"
          />
          <Title>
            <span>Pizza</span>
            <span>Point</span>
          </Title>
        </Logo>

        {NavLinks.map((link, i) => (
          <NavLink
            key={i}
            sx={{
              borderBottom: currentRoute(i, link.href)
                ? ".13em solid #db2527"
                : 0,
              // transform: currentRoute(i, link.href) ? "scale(1.1)" : "initial",
            }}
          >
            <Typography
              component={"a"}
              href={link?.href}
              style={{
                color: currentRoute(i, link.href) ? "#db2527" : null,
                fontWeight: currentRoute(i, link.href) ? "600" : null,
              }}
            >
              {link?.name}
            </Typography>
          </NavLink>
        ))}

        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          <NavDrawer onClick={() => setOpen(false)}>
            <NavDrawerLogo>
              <img
                src="https://res.cloudinary.com/united1234/image/upload/v1701943139/pizza-point/logo/pizzaLogo_al3tu4.png"
                alt="Logo"
              />
              <Title>
                <span>Pizza</span>
                <span>Point</span>
              </Title>
            </NavDrawerLogo>

            <Divider />

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <List>
                {data.map((item, index) => (
                  <ListItemButton key={index}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </NavDrawer>
        </Drawer>

        <Cart>
          <Link href="/cart" passHref>
            <IconButton>
              <Badge badgeContent={quantity} color="warning">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </Link>
        </Cart>

        <Tooltip title={themeLight ? "Dark Mode" : "Light Mode"}>
          <IconButton onClick={handleThemeToggle}>
            {themeLight ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
        </Tooltip>

        <MenuButton>
          <IconButton size="small" onClick={() => setOpen(true)}>
            <MenuIcon fontSize="inherit" />
          </IconButton>
        </MenuButton>
      </Container>
    </Main>
  );
};

export default StyledNav;
