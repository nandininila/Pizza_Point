import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  styled,
} from "@mui/material";

// styles
const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    backgroundImage: `url("https://res.cloudinary.com/united1234/image/upload/v1697662477/pizza-point/background/pizza_banner_yuauo2.webp")`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0 auto",
  })
);

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
  })
);

const Item = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "center",
    py: { xs: 6, tablet: 10 },
    width: { xs: "100%", tablet: "50%" },
  })
);

const TwoColor = styled("span")(({ theme }) =>
  theme.unstable_sx({
    color: theme.palette.mode === "dark" ? "black" : "white",
  })
);

const TextParent = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    gap: 0.5,
    flexDirection: "column",
    alignItems: "center",
  })
);

const Texts = styled("div")(({ theme }) =>
  theme.unstable_sx({
    typography: "caption",
    display: "flex",
    justifyContent: "space-between",
    width: 220,
    pb: 0.5,
    borderBottom: 2,
    borderBlockEndStyle: "dashed",
    borderBlockEndColor: theme.palette.warning.main,
    fontWeight: 500,
  })
);

const TextsEnd = styled("div")(({ theme }) =>
  theme.unstable_sx({
    typography: "caption",
    display: "flex",
    justifyContent: "space-between",
    width: 220,
    fontWeight: 500,
  })
);

const StyledReservation = () => {
  return (
    <Main>
      <Container>
        <Item>
          <Card
            sx={{
              minWidth: 287,
              width: "100%",
              maxWidth: 350,
              borderRadius: { xs: 2, tablet: 3 },
            }}
          >
            <CardContent
              sx={{
                p: 0,
              }}
            >
              <Typography
                textAlign="center"
                variant="body2"
                fontWeight={500}
                py={1.5}
                bgcolor={"warning.main"}
                paragraph
              >
                <TwoColor>Reservation</TwoColor>
              </Typography>
              <Typography variant="body1" fontWeight={"600"} textAlign="center">
                Opening Times
              </Typography>
              <Typography
                variant="caption"
                color="warning.main"
                textAlign="center"
                paragraph
              >
                Open 7 Days a Week
              </Typography>

              {/* Schedules */}
              <TextParent>
                <Texts>
                  <span>Week Days</span>
                  <span> 10:30 am - 9:00 pm</span>
                </Texts>
                <Texts>
                  <span>Saturday</span>
                  <span> 11:30 am - 10:30 pm</span>
                </Texts>
                <TextsEnd>
                  <span>Sunday</span>
                  <span> 11:30 am - 10:00 pm</span>
                </TextsEnd>
              </TextParent>

              <Typography
                color={"text.secondary"}
                variant="caption"
                textAlign="center"
                pt={2}
                paragraph
              >
                Book your table for lunch or dinner
              </Typography>
            </CardContent>
            <CardActions
              sx={{ display: "flex", justifyContent: "center", pb: 2.5 }}
            >
              <Button
                size="small"
                variant="contained"
                color="warning"
                sx={{ px: 3, borderRadius: 4, textTransform: "capitalize" }}
              >
                Book Now
              </Button>
            </CardActions>
          </Card>
        </Item>
      </Container>
    </Main>
  );
};

export default StyledReservation;
