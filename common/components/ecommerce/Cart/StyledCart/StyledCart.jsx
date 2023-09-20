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

const StyledCart = () => {
  const Main = styled("div")(({ theme }) =>
    theme.unstable_sx({
      // backgroundColor:
      //   theme.palette.mode === "dark" ? "action.hover" : "background.paper",
    })
  );

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
        <Paper sx={{ flexGrow: 1 }} elevation={3}>
          <Grid container justifyContent="center" gap={{ xs: 1, sm: 0 }}>
            <Item
              item
              xs={12}
              sm={2}
              justifyContent={{ xs: "center", sm: "left" }}
            >
              <Box maxWidth={150}>
                <img src="https://e7.pngegg.com/pngimages/431/519/png-clipart-pizza-hut-sushi-pizza-delivery-pizza-thumbnail.png" />
              </Box>
            </Item>
            <Item item xs={12} sm={5} py={1}>
              <Box>
                <Typography
                  gutterBottom
                  fontSize={{ xs: "initial", md: 18 }}
                  fontWeight={"bold"}
                >
                  Margherita
                </Typography>

                <Typography
                  gutterBottom
                  typography={{ xs: "body2", sm: "subtitle2" }}
                  fontWeight={"bold"}
                >
                  Price: <small>$</small>9
                </Typography>
                <Typography
                  gutterBottom
                  typography={{ xs: "body2", sm: "subtitle2" }}
                  fontWeight={"bold"}
                >
                  Size: Medium
                </Typography>
                <Typography typography={{ xs: "body2", sm: "subtitle2" }}>
                  Toppings: Onion, Cheese, Tomato
                </Typography>
              </Box>
            </Item>

            <Item item xs={12} sm={2}>
              <Box display={"flex"} alignItems={"center"}>
                <IconButton color="error" title="decrease">
                  <Remove />
                </IconButton>
                <Typography>1</Typography>
                <IconButton color="success" title="increase">
                  <Add />
                </IconButton>
              </Box>
            </Item>
            <Item item xs={12} sm={2.5}>
              <Typography fontWeight={"bold"} variant="h6" gutterBottom>
                <small>$</small>9
              </Typography>
            </Item>

            <Item item xs={12} sm={0.5}>
              <Button
                title="Remove"
                color="error"
                variant="contained"
                fullWidth
                sx={{ height: "100%", py: 1 }}
              >
                <DeleteOutline />
              </Button>
            </Item>
          </Grid>
        </Paper>
      </Container>
    </Main>
  );
};

export default StyledCart;
