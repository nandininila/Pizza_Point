import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  updateCart,
} from "@/redux/cartSlice";
import { Add, DeleteOutline, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const StyledCart = () => {
  // redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleIncrease = (product, customId, price) => {
    dispatch(
      increaseQuantity({
        ...product,
        customId: customId,
        quantity: 1,
        price,
      })
    );
  };

  const handleDecrease = (product, customId, price) => {
    dispatch(
      decreaseQuantity({
        ...product,
        customId: customId,
        quantity: 1,
        price,
      })
    );
  };

  const handleRemove = (customId) => {
    cart.products.forEach((product) => {
      if (product.customId == customId) {
        dispatch(deleteProduct({ customId: product.customId }));
        dispatch(
          updateCart({ price: product.price, quantity: product.quantity })
        );
      }
    });
  };

  // styled
  const Main = styled("div")(({ theme }) => theme.unstable_sx({}));

  const Container = styled("div")(({ theme }) =>
    theme.unstable_sx({
      maxWidth: "lg",
      margin: "0 auto",
      px: { xs: 2, sm: 3, md: 5 },
      pt: "5%",
    })
  );

  const Item = styled(Grid)(({ theme }) => ({
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  }));

  console.log("cart", cart);

  return (
    <Main>
      <Container>
        {cart?.products?.map((product, i) => (
          <Paper sx={{ flexGrow: 1, mb: 2 }} elevation={3} key={i}>
            <Grid container justifyContent="center" gap={{ xs: 1, sm: 0 }}>
              <Item
                item
                xs={12}
                sm={2}
                justifyContent={{ xs: "center", sm: "left" }}
              >
                <Box maxWidth={150}>
                  <img src={product?.image} alt={product?.name} />
                </Box>
              </Item>
              <Item item xs={12} sm={5} py={1}>
                <Box>
                  <Typography
                    gutterBottom
                    fontSize={{ xs: "initial", md: 18 }}
                    fontWeight={"bold"}
                  >
                    {product?.name}
                  </Typography>

                  <Typography
                    gutterBottom
                    typography={{ xs: "body2", sm: "subtitle2" }}
                    fontWeight={"bold"}
                  >
                    Price: <small>$</small>
                    {product?.price}
                  </Typography>
                  <Typography
                    gutterBottom
                    typography={{ xs: "body2", sm: "subtitle2" }}
                    fontWeight={"bold"}
                  >
                    Size: {product?.sizeName}
                  </Typography>

                  {product?.extras?.length > 0 && (
                    <Typography typography={{ xs: "body2", sm: "subtitle2" }}>
                      Toppings:{" "}
                      {product?.extras?.map((extra, i) => (
                        <span key={i}>
                          {extra?.name}
                          {product?.extras?.length - 1 !== i && (
                            <span>,</span>
                          )}{" "}
                        </span>
                      ))}
                    </Typography>
                  )}
                </Box>
              </Item>

              <Item item xs={12} sm={2}>
                <Box display={"flex"} alignItems={"center"}>
                  <IconButton
                    color="error"
                    title="decrease"
                    disabled={product?.quantity === 1}
                    onClick={() =>
                      handleDecrease(
                        product,
                        product?.customId,
                        product?.price,
                        product?.quantity
                      )
                    }
                  >
                    <Remove />
                  </IconButton>
                  <Typography>{product?.quantity}</Typography>
                  <IconButton
                    color="success"
                    title="increase"
                    disabled={product?.quantity === 10}
                    onClick={() =>
                      handleIncrease(product, product?.customId, product?.price)
                    }
                  >
                    <Add />
                  </IconButton>
                </Box>
              </Item>
              <Item item xs={12} sm={2.5}>
                <Typography fontWeight={"bold"} variant="h6" gutterBottom>
                  <small>$</small>
                  {product?.price * product?.quantity}
                </Typography>
              </Item>

              <Item item xs={12} sm={0.5}>
                <Button
                  title="Remove"
                  color="error"
                  variant="contained"
                  fullWidth
                  sx={{ height: "100%", py: 1 }}
                  onClick={() => handleRemove(product?.customId)}
                >
                  <DeleteOutline />
                </Button>
              </Item>
            </Grid>
          </Paper>
        ))}

        <Paper sx={{ flexGrow: 1, py: 2 }} elevation={3}>
          <Grid container justifyContent={"center"} alignItems={"center"}>
            <Grid item>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  textDecoration: "underline",
                  textUnderlineOffset: 5,
                }}
              >
                Cart Total
              </Typography>
              <Typography variant="body2" gutterBottom>
                Price: ${cart?.total}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Discount: $0
              </Typography>
              <Typography variant="body2" gutterBottom>
                Subtotal: $0
              </Typography>
              <Typography variant="h6" gutterBottom>
                Total: ${cart?.total}
              </Typography>
              <Button variant="contained" color="success">
                Checkout Now
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Main>
  );
};

export default StyledCart;
