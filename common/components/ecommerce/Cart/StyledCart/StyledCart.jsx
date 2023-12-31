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
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  reset,
} from "../../../../../redux/cartSlice";
import { frontendOrigin } from "../../../../types/utils/const";
import OrderDetail from "../../OrderDetail/OrderDetail";

const StyledCart = () => {
  //local states
  const [deliveryMethod, setDeliveryMethod] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  // redux
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

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
        dispatch(
          deleteProduct({
            customId: product.customId,
            price: product.price,
            quantity: product.quantity,
          })
        );
      }
    });
  };

  // create order
  const createOrder = async (data) => {
    try {
      // Use the post method to create the Order data
      const res = await axios.post(`${frontendOrigin}/api/orders`, data);
      // If successful, redirect user to /orders/ page and pass the id of the Order we just created
      // router is a nextJs function
      if (res.status === 201) {
        // After the order has been created, we then reset the Redux state manager (cart will be empty)
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
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
                <Link href={`product/${product?._id}`} passHref>
                  <Box maxWidth={150}>
                    <img src={product?.image} alt={product?.name} />
                  </Box>
                </Link>
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

                  {product?.sizes.length > 0 && (
                    <Typography
                      gutterBottom
                      typography={{ xs: "body2", sm: "subtitle2" }}
                      fontWeight={"bold"}
                    >
                      Size: {product?.sizeName}
                    </Typography>
                  )}

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
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  border={1}
                  borderRadius={5}
                  borderColor={"ButtonShadow"}
                >
                  <IconButton
                    size="small"
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
                  <Typography px={1} fontWeight="medium">
                    {product?.quantity}
                  </Typography>
                  <IconButton
                    size="small"
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
              <Item item xs={12} sm={1.5}>
                <Typography fontWeight={"bold"} variant="h6" gutterBottom>
                  <small>$</small>
                  {product?.price * product?.quantity}
                </Typography>
              </Item>

              <Item
                item
                xs={12}
                sm={1.5}
                justifyContent={{ xs: "center", sm: "right" }}
              >
                <Button
                  title="Remove"
                  color="error"
                  variant="contained"
                  sx={{
                    height: "100%",
                    width: { xs: "100%", sm: "initial" },
                    py: 1,
                  }}
                  onClick={() => handleRemove(product?.customId)}
                >
                  <DeleteOutline />
                </Button>
              </Item>
            </Grid>
          </Paper>
        ))}

        {cart.quantity > 0 ? (
          <Paper
            sx={{ p: 2, width: "100%", mt: cart.quantity > 0 && 5 }}
            elevation={3}
          >
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
              gap={2}
            >
              <Grid item xs={12}>
                <Typography
                  textAlign="center"
                  variant="h6"
                  paragraph
                  sx={{
                    textDecoration: "underline",
                    textUnderlineOffset: 7,
                  }}
                >
                  Order Summary
                </Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2" gutterBottom>
                  Price
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Discount
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Subtotal
                </Typography>
                <Typography variant="h6">Total</Typography>
              </Grid>

              <Grid item>
                <Typography variant="body2" gutterBottom>
                  ${cart?.total}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  $0
                </Typography>
                <Typography variant="body2" gutterBottom>
                  $0
                </Typography>
                <Typography variant="h6">${cart?.total}</Typography>
              </Grid>

              <Grid item xs={12}>
                {deliveryMethod ? (
                  <Button
                    onClick={() => setOpenModal(true)}
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Cash on delivery
                  </Button>
                ) : (
                  <Button
                    onClick={() => setDeliveryMethod(true)}
                    variant="contained"
                    color="warning"
                    fullWidth
                  >
                    Checkout Now
                  </Button>
                )}
              </Grid>
              {openModal && <OrderDetail />}
            </Grid>
          </Paper>
        ) : (
          "Card is empty"
        )}
      </Container>
    </Main>
  );
};

export default StyledCart;
