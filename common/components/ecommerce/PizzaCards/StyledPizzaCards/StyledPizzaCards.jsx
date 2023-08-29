import {
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Stack,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import arrayShuffle from "array-shuffle";
import axios from "axios";
import { useEffect, useState } from "react";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    // px: createFluidValue(0.4, 1),
    px: { xs: 1, sm: 3, md: 5 },
    pt: "7%",
  })
);

const StyledPizzaCards = () => {
  const theme = useTheme();
  const [pizzas, setPizzas] = useState([]);

  const loadData = async () => {
    try {
      const url = "api/pizza";
      const res = await axios.get(url);
      const data = res.data;

      const shuffledPizzas = arrayShuffle(data);
      setPizzas(shuffledPizzas);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const [selectedPrice, setSelectedPrice] = useState();
  const [selectedId, setSelectedId] = useState();
  const [selectedIndex, setSelectedIndex] = useState();

  const handleGet = (id, i, plan) => {
    setSelectedId(id);
    setSelectedIndex(i);

    const price = plan[0].price;
    setSelectedPrice(price);
  };

  let sliceEndNumber = 4;
  if (useMediaQuery(theme.breakpoints.between("sm", "md"))) {
    sliceEndNumber = 3;
  }

  //

  return (
    <Main>
      <Container>
        <Grid
          container
          rowSpacing={2}
          columnSpacing={{ xs: 1.5, sm: 1.5, md: 2 }}
        >
          {pizzas
            .slice(0, sliceEndNumber)
            .map(({ id, name, description, img, price, sizeandcrust }, i) => (
              <Grid item key={i} xs={6} sm={4} md={3}>
                <Card>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="194"
                      image={img}
                      title={name}
                    />
                    <CardContent
                      sx={{ height: { xs: 100, sm: 120 }, overflow: "scroll" }}
                    >
                      <Typography
                        gutterBottom
                        color="warning.light"
                        align="center"
                        component="div"
                        fontWeight={{ xs: "bold", sm: "medium" }}
                        sx={{
                          typography: {
                            xs: "caption",
                            sm: "subtitle2",
                            tablet: "subtitle1",
                          },
                        }}
                      >
                        {name}
                      </Typography>
                      <Typography
                        align="center"
                        color="text.secondary"
                        component="div"
                        sx={{
                          typography: { xs: "caption", tablet: "body2" },
                        }}
                      >
                        {description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    <Stack direction="row" spacing={0.5}>
                      {sizeandcrust?.map((plan, i) =>
                        Object.values(plan, i).map((plan, i) => (
                          //
                          <Chip
                            key={i}
                            label={i === 0 ? "30cm" : i === 1 ? "40cm" : "50cm"}
                            // label={plan[0].price}
                            size="small"
                            onClick={() => {
                              handleGet(id, i, plan);
                            }}
                            sx={{
                              fontSize: {
                                mobileS: "9px",
                                mobileM: "10.5px",
                              },

                              bgcolor:
                                i === selectedIndex && id === selectedId
                                  ? "text.1"
                                  : i === 0 &&
                                    id !== selectedId &&
                                    "warning.light",

                              color:
                                i === selectedIndex && id === selectedId
                                  ? "white"
                                  : i === 0 && id !== selectedId && "white",

                              outline:
                                i === selectedIndex &&
                                id === selectedId &&
                                "1px solid",

                              ":focus": {
                                bgcolor: "text.1",
                                color: "white",
                              },

                              ":hover": {
                                bgcolor:
                                  i === selectedIndex && id === selectedId
                                    ? "text.1"
                                    : i === 0 &&
                                      id !== selectedId &&
                                      "warning.dark",
                                outline: "1px solid",
                                outlineColor: "warning.dark",
                              },
                            }}
                          />
                        ))
                      )}
                    </Stack>
                  </CardActions>
                  <Box
                    component={CardActions}
                    display={"flex"}
                    justifyContent={"space-around"}
                  >
                    <Typography
                      paragraph
                      sx={{
                        color: "warning.light",
                        fontWeight: { xs: "regular", sm: "medium" },
                      }}
                    >
                      ${selectedId === id ? selectedPrice : price}
                    </Typography>
                    <Typography
                      paragraph
                      sx={{
                        fontWeight: { xs: "regular", sm: "medium" },
                      }}
                    >
                      1
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledPizzaCards;
