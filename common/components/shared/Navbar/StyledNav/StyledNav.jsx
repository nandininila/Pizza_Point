import { frontendOrigin } from "@/types/utils/const";
import { styled } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import logo from "/content/logo/pizzaLogo.png";

const Logo = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    pr: "2em",
  })
);

const Title = styled("div")(({ theme }) =>
  theme.unstable_sx({
    pl: ".2em",
    fontSize: "1.2rem",

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

const NavLink = styled("span")(({ theme }) =>
  theme.unstable_sx({
    "& a": {
      color: "text.1",
      fontSize: "0.85rem",
      p: "0 .5em",
      fontWeight: "300",

      "&:hover": {
        color: "text.2",
        fontWeight: "600",
      },
    },
  })
);

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "bg.1",
    p: "0 1em",
    height: "4rem",
    userSelect: "none",
  })
);

const StyledNav = () => {
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
      <Logo>
        <Image src={logo} height={"32"} width={"32"} alt="Logo" />
        <Title>
          <span>Pizza</span>
          <span>Point</span>
        </Title>
      </Logo>

      {NavLinks.map((link, i) => (
        <NavLink
          key={i}
          sx={{
            borderBottom: currentRoute(i, link.href) ? "2px solid #db2527" : 0,
            transform: currentRoute(i, link.href) ? "scale(1.1)" : "initial",
          }}
        >
          <Link
            href={link?.href}
            style={{
              color: currentRoute(i, link.href) ? "#db2527" : null,
              fontWeight: currentRoute(i, link.href) ? "600" : null,
            }}
          >
            {link?.name}
          </Link>
        </NavLink>
      ))}
    </Main>
  );
};

export default StyledNav;
