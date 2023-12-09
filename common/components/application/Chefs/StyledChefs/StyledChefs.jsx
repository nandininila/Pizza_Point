import {
  Box,
  Card,
  CardActions,
  CardMedia,
  Grid,
  Paper,
  Typography,
  alpha,
  styled,
  useTheme,
} from "@mui/material";

import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoInstagramAlt } from "react-icons/bi";

import Link from "next/link";
import { useState } from "react";
import Chefs from "../../../../content/data/Chefs.json";

// styles
const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    bgcolor:
      theme.palette.mode === "dark"
        ? "rgba(255, 255, 255, 0.05)"
        : "ButtonShadow",
  })
);

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
  })
);

const StyledChefs = () => {
  const theme = useTheme();
  let mode = theme.palette.mode;

  const [index, setIndex] = useState();
  const handleOnMouseEnter = (i) => {
    setIndex(i);
  };

  return (
    <Main>
      <Container>
        <Grid container py={{ xs: 6, tablet: 2 }} rowGap={1}>
          <Grid item xs={12} display={{ xs: "none", tablet: "block" }}>
            <Grid container justifyContent="space-between">
              <Grid item position="relative">
                <Box
                  sx={{
                    width: 200,
                    opacity: mode === "dark" ? 0.4 : 0.3,
                    rotate: "-45deg",
                    position: "absolute",
                    top: 50,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919470/pizza-point/sketches/pizza_sketch_g7nwai.webp"
                    alt="pizza_slice"
                  />
                </Box>
              </Grid>
              <Grid item position="relative">
                <div
                  style={{
                    width: 80,
                    opacity: mode === "dark" ? 1 : 0.5,
                    rotate: "60deg",
                    position: "absolute",
                    left: -100,
                    top: 0,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919470/pizza-point/sketches/hole_cheese_tpvpvp.webp"
                    alt="cheese"
                  />
                </div>
              </Grid>
              <Grid item position="relative">
                <Box
                  sx={{
                    width: { xs: 100, laptop: 130 },
                    position: "absolute",
                    opacity: mode === "dark" ? 0.4 : 0.1,
                    right: 0,
                    rotate: "25deg",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1696584129/pizza-point/sketches/olive_olil_bottol_rz1zi0.webp"
                    alt="olive_oil"
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid item>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              rowGap={6}
            >
              <Grid item pt={{ xs: 0, tablet: 9 }}>
                <Typography
                  variant="body2"
                  color="warning.light"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  Our Chefs
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  paragraph
                  textAlign="center"
                  textTransform="capitalize"
                >
                  Meet our great chefs
                </Typography>
                <Typography
                  variant="body2"
                  textAlign="center"
                  paddingX={{ xs: 0, tablet: "20%" }}
                >
                  Are you pizza lover? If your answer is yes then this
                  restaurant for you. We serve pizza and food for reasonable
                  prices, and cooked by talented chefs
                </Typography>
              </Grid>

              <Grid item>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  rowSpacing={1.5}
                  columnSpacing={{ xs: 1, tablet: 2 }}
                >
                  {Chefs.map((chef, i) => (
                    <Grid item xs={6} tablet={3} key={i}>
                      <Box
                        display="flex"
                        justifyContent={i % 2 ? "left" : "right"}
                      >
                        <Card
                          onMouseEnter={() => handleOnMouseEnter(i)}
                          onMouseLeave={() => setIndex()}
                          key={i}
                          sx={{
                            borderRadius: { xs: 2, tablet: 5 },
                            position: "relative",
                            height: 230,
                            width: 180,
                          }}
                        >
                          <CardMedia
                            sx={{
                              objectPosition:
                                chef?.id === 4 ? "center top" : "initial",
                              height: 230,
                              width: 180,
                            }}
                            component="img"
                            alt="green iguana"
                            image={chef?.image}
                          />

                          <CardActions
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                            }}
                          >
                            <Paper
                              sx={{
                                position: "absolute",
                                bottom: "10%",
                                p: "5% 15%",
                                color: "black",
                                borderRadius: 1.5,
                                backgroundColor:
                                  i === index
                                    ? alpha("#ecbe92", 0.85)
                                    : alpha("#ffff", 0.85),
                              }}
                            >
                              <Typography
                                variant="caption"
                                fontWeight="bold"
                                display="block"
                                textAlign="center"
                              >
                                {chef?.name}
                              </Typography>
                              <Typography
                                variant="caption"
                                display="block"
                                textAlign="center"
                              >
                                {chef?.designation}
                              </Typography>

                              {i === index && (
                                <Box
                                  display="flex"
                                  justifyContent="center"
                                  gap={0.8}
                                >
                                  <Link
                                    target="_blank"
                                    style={{ color: "black" }}
                                    passHref
                                    href={"https://www.facebook.com"}
                                  >
                                    <BiLogoFacebookCircle />
                                  </Link>

                                  <Link
                                    target="_blank"
                                    style={{ color: "black" }}
                                    passHref
                                    href={"https://www.instagram.com"}
                                  >
                                    <BiLogoInstagramAlt />
                                  </Link>

                                  <Link
                                    target="_blank"
                                    style={{ color: "black" }}
                                    passHref
                                    href={"https://www.twitter.com"}
                                  >
                                    <AiFillTwitterCircle />
                                  </Link>
                                </Box>
                              )}
                            </Paper>
                          </CardActions>
                        </Card>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} display={{ xs: "none", tablet: "block" }}>
            <Grid container justifyContent="space-between" position="relative">
              <Grid item>
                <div
                  style={{
                    maxWidth: 120,
                    opacity: mode === "dark" ? 1 : 0.2,
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1695919471/pizza-point/sketches/pizza4_cahxp6.webp"
                    alt="little_pizza"
                  />
                </div>
              </Grid>
              <Grid item position="absolute" left="39%" bottom="-100%">
                <div
                  style={{
                    width: 250,
                    rotate: "-90deg",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1697195826/pizza-point/sketches/latus_leaf_jkfmtr.png"
                    alt="leaf"
                  />
                </div>
              </Grid>
              <Grid item>
                <div
                  style={{
                    width: 80,
                    opacity: mode === "dark" ? 1 : 0.4,
                    rotate: "20deg",
                  }}
                >
                  <img
                    src="https://res.cloudinary.com/united1234/image/upload/v1696584201/pizza-point/sketches/leaf_wws764.webp"
                    alt="leaf"
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

export default StyledChefs;
