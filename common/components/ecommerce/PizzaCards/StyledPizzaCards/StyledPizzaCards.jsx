import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import arrayShuffle from "array-shuffle";
import axios from "axios";
import { useContext, useEffect, useState } from "react";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    // px: createFluidValue(0.4, 1),
    px: { xs: 2, sm: 3, md: 5 },
    pt: "5%",
  })
);

const StyledPizzaCards = () => {
  const [addToCart, setAddToCart] = useState(false);
  const [selectedID, setSelectedID] = useState();

  const theme = useTheme();
  const {
    allData,
    setAllData,
    allShuffledData,
    setAllShuffledData,
    selectedCategory,
    // setSelectedCategory,
  } = useContext(ThemeContext);

  const loadData = async () => {
    try {
      const url = "api/items";
      const res = await axios.get(url);
      const data = res.data;

      // condition to load data
      const categoryWiseData = data.filter((d) => {
        return d.category === selectedCategory;
      });
      // condition to load data

      setAllData(data);
      const shuffled = arrayShuffle(categoryWiseData);
      setAllShuffledData(shuffled);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  let sliceEndNumber = 4;
  if (useMediaQuery(theme.breakpoints.between("sm", "md"))) {
    sliceEndNumber = 3;
  }

  //

  return (
    <Main>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1.5, md: 3 }}>
          {allShuffledData
            .slice(0, sliceEndNumber)
            .map(
              (
                { id, name, image, description, price, category, extras },
                i
              ) => (
                <Grid item key={i} xs={6} sm={4} md={3}>
                  <Card>
                    <CardActionArea>
                      <CardMedia
                        sx={{
                          px:
                            category === "pizza" ||
                            (category === "ice cream" && 1),
                          height: { xs: 120, mobileM: 200 },
                          objectFit:
                            category === "pizza" || category === "ice cream"
                              ? "contain"
                              : "cover",
                        }}
                        title={name}
                        component="img"
                        image={image}
                        alt={name}
                      />
                      <CardContent sx={{ pb: 1 }}>
                        <Typography
                          noWrap
                          sx={{
                            fontSize: {
                              xs: " 0.875rem",
                              mobileL: "1rem",
                              sm: "1.1rem",
                              md: "1.4rem",
                            },
                            fontWeight: "medium",
                          }}
                        >
                          {name} {category === "pizza" && "Pizza"}
                        </Typography>

                        <Typography
                          color="text.secondary"
                          noWrap
                          sx={{
                            typography: { xs: "caption", sm: "body2" },
                          }}
                        >
                          {category === "pizza" && "with"} {description}
                        </Typography>
                      </CardContent>
                    </CardActionArea>

                    <CardActions
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        pl: 2,
                      }}
                    >
                      <Typography
                        component={"span"}
                        sx={{
                          fontSize: {
                            xs: "1rem",
                            mobileL: "1.1rem",
                            sm: "1.3rem",
                            md: "1.5rem",
                          },
                          fontWeight: "bold",
                        }}
                      >
                        <Typography
                          component={"span"}
                          color={"warning.light"}
                          sx={{
                            fontSize: {
                              xs: "0.75rem",
                              mobileL: "0.875rem",
                              sm: "1.1rem",
                            },
                            fontWeight: "bold",
                          }}
                        >
                          $
                        </Typography>
                        {price}
                      </Typography>

                      <IconButton
                        aria-label="add to favorites"
                        sx={{
                          lineHeight: 0,
                          color: selectedID === id && "red",
                        }}
                        onClick={() => {
                          setAddToCart(!addToCart);
                          setSelectedID(id);
                        }}
                      >
                        {selectedID === id ? <Favorite /> : <FavoriteBorder />}
                      </IconButton>
                    </CardActions>
                  </Card>
                </Grid>
              )
            )}
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledPizzaCards;
