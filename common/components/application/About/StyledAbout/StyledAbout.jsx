import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Box, Grid, Paper, Typography, styled } from "@mui/material";

// styles
const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    bgcolor: theme.palette.mode === "dark" ? "initial" : "ButtonShadow",
  })
);

const ImgContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    "& div": {
      position: "absolute",
    },

    "div:nth-of-type(1)": {
      top: 0,
      width: "10%",
    },
    "div:nth-of-type(2)": {
      opacity: 0.3,
      width: "10%",
      bottom: 0,
      left: createFluidValue(2, 0),
    },
    "div:nth-of-type(3)": {
      // top: createFluidValue(1, 4.5),
      // right: createFluidValue(0.3, 1.2),
      width: "14%",
      right: "25%",
    },
    "div:nth-of-type(4)": {
      // top: createFluidValue(1, 4),
      width: "10%",
      right: "25%",
    },
  })
);

const Item = styled(Paper)(({ theme }) =>
  theme.unstable_sx({
    p: 1,
    // m: 1,
  })
);

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
    mt: { xs: 8, sm: 12 },
  })
);

const StyledAbout = () => {
  return (
    <Main>
      <Container>
        <Grid container py={{ xs: 6, tablet: 2 }} rowGap={1}>
          <Grid item xs={12} display={{ xs: "none", tablet: "block" }}>
            <Grid container justifyContent="space-between">
              <Grid item>
                <div style={{ maxWidth: 130, opacity: 0.8 }}>
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919472/pizza-point/sketches/pizza-illo-2_r6aqms.webp"
                    alt="pizza_slice"
                  />
                </div>
              </Grid>
              <Grid item position="relative">
                <div
                  style={{
                    width: 130,
                    opacity: 0.05,
                    rotate: "90deg",
                    position: "absolute",
                    left: -120,
                    top: -20,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919470/pizza-point/sketches/onion_sketch1_fl9k3f.webp"
                    alt="pizza_slice"
                  />
                </div>
              </Grid>
              <Grid item position="relative">
                <Box
                  width={{ tablet: 150, md: 200 }}
                  sx={{
                    position: "absolute",
                    opacity: 0.2,
                    right: 35,
                    transform: "skewX(-35deg)",
                    rotate: "20deg",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919471/pizza-point/sketches/pizza2_fyt0ar.webp"
                    alt="pizza_slice"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Grid
              container
              justifyContent="space-around"
              alignItems="center"
              rowGap={6}
              columnSpacing={{ tablet: 2, md: 0 }}
            >
              <Grid item tablet={6} display="flex" justifyContent="center">
                <Box maxWidth={300}>
                  <img
                    style={{ borderRadius: 4 }}
                    src="https://res.cloudinary.com/united1234/image/upload/v1695991634/pizza-point/sketches/pizza_point_shop_fqsch5.webp"
                  />
                </Box>
              </Grid>
              <Grid item tablet={6}>
                <Typography
                  variant="body2"
                  color="warning.main"
                  textAlign={{ xs: "center", tablet: "initial" }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  paragraph
                  textAlign={{ xs: "center", tablet: "initial" }}
                >
                  This Is Our Story
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  textAlign="justify"
                >
                  <strong>Pizza Point</strong> is a family owner and operated
                  restaurant serving the community for over 20 years. Stop by
                  and Dine-In-our comfortable Restaurant or Call for Carry-Out
                  orders. You may also call to pre-order your Dine-In meal. We
                  offer only the freshest and highest quality ingredients to
                  make your dining experience with us memorable. Ask us about
                  having a special birthday party at the <em>Pizza Point</em>.
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} display={{ xs: "none", tablet: "block" }}>
            <Grid container justifyContent="space-between" position="relative">
              <Grid item>
                <div style={{ maxWidth: 120, opacity: 0.2 }}>
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919473/pizza-point/sketches/roll_sketch_wjpudp.webp"
                    alt="roll_sketch"
                  />
                </div>
              </Grid>
              <Grid item position="absolute" left="43%" bottom="-70%">
                <div style={{ width: 150 }}>
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695983619/pizza-point/sketches/onion_slice_dnxmku.webp"
                    alt="onion_slice"
                  />
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: 200,
                    opacity: 0.2,
                    rotate: "-45deg",
                    position: "absolute",
                    right: 0,
                    bottom: 0,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919470/pizza-point/sketches/hole_cheese_tpvpvp.webp"
                    alt="pizza_slice"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledAbout;
