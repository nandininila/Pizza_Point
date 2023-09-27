import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Checkbox,
  Grid,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import arrayShuffle from "array-shuffle";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
    pt: "5%",
  })
);

const StyledPizzaCards = ({ allServerData }) => {
  const [addToCart, setAddToCart] = useState(true);

  const theme = useTheme();
  const {
    // allData,
    setAllData,
    allShuffledData,
    setAllShuffledData,
    selectedCategory,
    // setSelectedCategory,
  } = useContext(ThemeContext);

  const loadData = async () => {
    try {
      // const url = "http://localhost:3000/api/products";
      // const res = await axios.get(url);
      // const data = res.data;

      // condition to load data
      const categoryWiseData = await allServerData.filter((d) => {
        return d.category === selectedCategory;
      });
      // condition to load data

      setAllData(allServerData);
      const shuffled = arrayShuffle(categoryWiseData);
      setAllShuffledData(shuffled);
    } catch (error) {
      console.error(error);
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

  const handleChange = (event) => {
    setAddToCart(event.target.checked);
  };

  return (
    <Main>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1.5, md: 3 }}>
          {allShuffledData
            .slice(0, sliceEndNumber)
            .map(({ _id, name, image, description, price, category }, i) => (
              <Grid item key={i} xs={6} sm={4} md={3}>
                <Card>
                  <Link href={`product/${_id}`} passHref>
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
                          color={"initial"}
                          noWrap
                          sx={{
                            fontSize: {
                              mobileL: "1rem",
                              sm: "1.1rem",
                              md: "1.15rem",
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
                  </Link>

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

                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite />}
                      color="error"
                      checked={addToCart}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>
    </Main>
  );
};

export default StyledPizzaCards;
