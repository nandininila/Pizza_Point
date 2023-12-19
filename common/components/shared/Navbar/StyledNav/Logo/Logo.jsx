import { Box, styled } from "@mui/material";

const Title = styled("a")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    alignItems: "center",
    typography: "h5",

    "span:first-of-type": {
      fontWeight: "700",
      color: theme.palette.mode === "dark" ? "white" : "text.1",
    },

    "span:last-of-type": {
      color: "text.2",
    },
  })
);

const Logo = () => {
  return (
    <Title href="/">
      <Box width={35} pr={0.5}>
        <img
          src="https://res.cloudinary.com/united1234/image/upload/v1701943139/pizza-point/logo/pizzaLogo_al3tu4.png"
          alt="logo"
        />
      </Box>
      <span>Pizza</span>
      <span>Point</span>
    </Title>
  );
};

export default Logo;
