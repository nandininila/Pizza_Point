import {
  Box,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// styles
const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
  })
);

const Item = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  })
);

const StyledCommitment = () => {
  const theme = useTheme();

  const img1 =
    "https://res.cloudinary.com/united1234/image/upload/v1697256252/pizza-point/Chefs/delivery_man_aioz8i.webp";
  const img2 =
    "https://res.cloudinary.com/united1234/image/upload/v1697271977/pizza-point/Chefs/delivery_man_fbm5ck.webp";

  let deliverImg = img2;
  let colorEfe = 0;
  let colorPosition = "50%";

  if (useMediaQuery(theme.breakpoints.down("tablet"))) {
    deliverImg = img1;
    colorEfe = "20%";
    colorPosition = "53%";
  }

  return (
    <Main>
      <Container>
        <Grid
          container
          direction={{ xs: "column-reverse", tablet: "row" }}
          py={{ xs: 6, tablet: 10 }}
          rowGap={6}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} tablet={6}>
            <Typography
              variant="h6"
              fontWeight="bold"
              color="warning.main"
              gutterBottom
            >
              30 minutes, or pizza for free
            </Typography>
            <Typography variant="body2" paragraph>
              If we can't deliver a pizza to you within 30 minutes, we will give
              away one pizza from your order for free.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="warning.main"
              gutterBottom
            >
              Delivery is valid for orders starting from $15
            </Typography>
            <Typography variant="body2" paragraph>
              We can deliver your pizza, to In provided that the cost of the
              ordered pizzas is at least $15.00
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="warning.main"
              gutterBottom
            >
              $1000 maximum amount when paying in cash
            </Typography>
            <Typography variant="body2" paragraph>
              We will be able to accept your order, provided that when paying in
              cash the amount will not exceed $10000.
            </Typography>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <Item>
              <Box
                maxWidth={{ xs: 300, tablet: 420 }}
                sx={{
                  background: `radial-gradient(at 50% ${colorPosition}, #ff9800 ${colorEfe}, transparent 70%)`,
                }}
              >
                <img src={deliverImg} alt="delivery_man" />
              </Box>
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledCommitment;
