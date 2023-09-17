import {
  Button,
  ButtonGroup,
  Checkbox,
  Chip,
  Grid,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";

import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";

const StyledSingleProduct = ({ singleProduct: product }) => {
  const [checkedState, setCheckedState] = useState(
    new Array(product?.extras?.length).fill(false)
  );

  const roundNumber = (number) => {
    return parseInt(number);
  };

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(roundNumber(product?.price));
  const [size, setSize] = useState(price);
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(0);
  const [extras, setExtras] = useState([]);

  const changePrice = (number) => {
    setPrice(roundNumber(price + number));
  };

  // This handles the chosen size price of pizza (each size of the pizza is a different)
  const handleSize = (selectedSize) => {
    const difference = roundNumber(selectedSize) - size;

    setSize(roundNumber(selectedSize));
    changePrice(difference);
  };

  // handles extra options
  const handleExtras = (e, option, position) => {
    // Each checkboxes particularly updated by click
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);

    let optionPrice = option?.price;
    if (optionPrice < 1) {
      optionPrice = 1;
    }

    const checked = e.target.checked;

    if (checked === true) {
      changePrice(roundNumber(optionPrice));
      setExtras((prev) => [...prev, option]);
    } else {
      changePrice(roundNumber(-optionPrice));
      setExtras(extras.filter((extra) => extra._id !== option._id));
    }
  };

  //

  const theme = useTheme();
  let mode = theme.palette.mode;

  const Main = styled("div")(({ theme }) =>
    theme.unstable_sx({
      backgroundColor: mode === "dark" ? "action.hover" : "background.paper",
    })
  );

  const Container = styled("div")(({ theme }) =>
    theme.unstable_sx({
      maxWidth: "lg",
      margin: "0 auto",
      px: { xs: 2, sm: 3, md: 5 },
      py: "5%",
    })
  );

  return (
    <Main>
      <Container>
        <Grid
          container
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 5, md: 10 }}
          alignItems={{ sm: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <img src={product?.image} alt="Product image" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography
              paragraph
              fontSize={{ xs: "1.2rem", sm: "1.3rem", md: "1.5rem" }}
              fontWeight="bold"
              gutterBottom
            >
              {product?.name} {product?.category === "pizza" && "Pizza"}
            </Typography>

            <Typography
              paragraph
              color={"warning.light"}
              fontSize={{ xs: "1.1rem", sm: "1.2rem", md: "1.3rem" }}
              fontWeight="bold"
              sx={{
                textDecoration: "underline 2px",
                textUnderlineOffset: "4px",
              }}
            >
              <Typography
                component={"span"}
                typography={{ xs: "subtitle2", md: "body2" }}
              >
                $
              </Typography>
              {price}
            </Typography>

            <Typography
              color="text.secondary"
              fontSize={{ xs: "0.8rem" }}
              fontWeight="500"
              gutterBottom
            >
              Size
            </Typography>

            {product?.sizes?.map((size, i) => (
              <Chip
                key={i}
                label={size?.name}
                color={selectedSizeIndex === i ? "warning" : "default"}
                variant={selectedSizeIndex === i ? "filled" : "outlined"}
                sx={{
                  mr: 1,
                  fontWeight: "600",
                  borderColor:
                    selectedSizeIndex === i ? "initial" : "ButtonShadow",
                }}
                onClick={() => {
                  handleSize(size?.price);
                  setSelectedSizeIndex(i);
                }}
              />
            ))}

            {product?.extras && (
              <Typography
                color="text.secondary"
                fontSize={{ xs: "0.8rem" }}
                fontWeight="500"
                gutterBottom
                mt={2}
              >
                Topping
              </Typography>
            )}

            {product?.extras?.map((option, index) => (
              <Checkbox
                key={option._id}
                sx={{
                  p: 0,
                  mr: 1,
                  mb: 1,
                }}
                disableRipple
                icon={
                  <Chip
                    label={option?.name}
                    variant="outlined"
                    sx={{
                      fontWeight: "600",
                      borderColor: "ButtonShadow",
                    }}
                  />
                }
                checkedIcon={
                  <Chip
                    label={option?.name}
                    variant="filled"
                    color="warning"
                    sx={{
                      fontWeight: "600",
                    }}
                  />
                }
                checked={checkedState[index]}
                onChange={(e) => handleExtras(e, option, index)}
              />
              // <div style={{ display: "flex", margin: "10px" }} key={option._id}>
              //   <input
              //     type="checkbox"
              //     id={option?._id}
              //     name={option?.name}
              //     checked={checkedState[index]}
              //     onChange={(e) => handleExtras(e, option, index)}
              //   />
              //   <label htmlFor={option?.name}>{option?.name}</label>
              // </div>
            ))}

            <Typography
              color="text.secondary"
              fontSize={{ xs: "0.8rem" }}
              fontWeight="500"
              gutterBottom
              mt={1}
            >
              Quantity
            </Typography>

            <Stack direction="row" spacing={2}>
              <ButtonGroup
                size="small"
                variant="contained"
                color="inherit"
                // color="warning"
                sx={{
                  borderRadius: 12,
                }}
              >
                <Button
                  sx={{ borderRadius: 12 }}
                  onClick={() => setQuantity(quantity - 1)}
                >
                  <Remove />
                </Button>
                <Button sx={{ pointerEvents: "none" }}>{quantity}</Button>
                <Button
                  sx={{ borderRadius: 12 }}
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Add />
                </Button>
              </ButtonGroup>

              <Button
                variant="outlined"
                color="warning"
                sx={{ borderRadius: 12, textTransform: "capitalize" }}
              >
                Add to cart
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

{
  /* <Typography
  gutterBottom
  color="text.secondary"
  noWrap
  typography={{ xs: "caption", md: "body2" }}
>
  {product?.category === "pizza" && "with"} {product?.description}
</Typography> */
}

export default StyledSingleProduct;
