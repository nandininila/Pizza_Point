import { Box, Grid, Typography, styled } from "@mui/material";
import Slides from "./Slides/Slides";

// styles
const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    // bgcolor:
    //   theme.palette.mode === "dark" ? "rgba(255, 255, 255, 0.05)" : "initial",
  })
);

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
  })
);

const StyledTestimonial = () => {
  return (
    <Main>
      <Container>
        <Grid
          container
          py={{ xs: 6, tablet: 10 }}
          // alignItems="center"
          justifyContent="center"
          columnSpacing={{ tablet: 5 }}
          rowGap={1}
        >
          <Grid item xs={12} tablet={6}>
            <Typography
              pt={{ tablet: 2.5 }}
              variant="h6"
              fontWeight="bold"
              textAlign={{ xs: "center", tablet: "initial" }}
              gutterBottom
            >
              What Our Customers Say
            </Typography>
            <Typography
              variant="body2"
              color="warning.main"
              textAlign={{ xs: "center", tablet: "initial" }}
              paragraph
            >
              We Have 50 Happy Reviews
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatum, atque! Eos minus tempore fugit placeat, voluptate
              perspiciatis sit accusantium recusandae facere temporibus a
              nostrum animi cupiditate quia sunt quasi nemo.
            </Typography>

            <Box
              display={{ xs: "none", tablet: "block" }}
              position="relative"
              maxWidth={400}
            >
              <img
                style={{ position: "absolute", top: -80 }}
                src="https://res.cloudinary.com/united1234/image/upload/v1696435066/pizza-point/sketches/red_chilli_gwwfjz.webp"
              />
            </Box>
          </Grid>
          <Grid item xs={12} tablet={6}>
            <Slides />
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledTestimonial;
