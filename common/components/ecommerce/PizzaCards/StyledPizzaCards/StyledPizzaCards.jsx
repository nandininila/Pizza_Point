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
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../../contexts/ThemeModeProvider";
import { frontendOrigin } from "../../../../types/utils/const";

const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
    pt: "5%",
  })
);

const StyledPizzaCards = () => {
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
      const url = `${frontendOrigin}/api/products`;
      const { data } = await axios.get(url);
      setAllData(data);
      const shuffled = arrayShuffle(data);
      setAllShuffledData(shuffled);
    } catch (error) {
      console.error(error);
    }
  };

  const categoryWiseData = allShuffledData.filter((d) => {
    return d.category === selectedCategory;
  });

  useEffect(() => {
    loadData();
  }, [selectedCategory]);

  let sliceEndNumber = 4;
  if (useMediaQuery(theme.breakpoints.between("sm", "md"))) {
    sliceEndNumber = 3;
  }

  //
  const [addToWishlist, setAddToWishlist] = useState([]);

  const handleCheckboxes = (event, id) => {
    if (event.target.checked) {
      setAddToWishlist([...addToWishlist, id]);
    } else {
      setAddToWishlist(addToWishlist.filter((filterId) => filterId !== id));
    }
  };

  return (
    <Main>
      <Container>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 1.5, md: 3 }}>
          {categoryWiseData
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
                      title="Add to wishlist"
                      icon={<FavoriteBorder color="warning" />}
                      checkedIcon={<Favorite />}
                      color="error"
                      checked={addToWishlist.includes(_id)}
                      onChange={(e) => handleCheckboxes(e, _id)}
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
