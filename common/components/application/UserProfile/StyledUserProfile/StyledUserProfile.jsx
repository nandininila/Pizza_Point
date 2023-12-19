import { Box, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";

// styles
const Main = styled("main")(({ theme }) => theme.unstable_sx({}));

const Container = styled("section")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: { xs: 2, sm: 3, md: 5 },
  })
);

const Center = styled("div")(({ theme }) =>
  theme.unstable_sx({
    color: "white",
    height: "25vmin",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
  })
);

const StyledUserProfile = () => {
  // const user = useSelector(selectUser);
  // const isAuthenticated = useSelector(selectIsAuthenticated);
  // redux
  const user = useSelector((state) => state?.auth?.user);
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);

  // styled
  if (!isAuthenticated) {
    return (
      <Main>
        <Container>
          <Center sx={{ bgcolor: "warning.dark" }}>
            <Typography sx={{ typography: { xs: "body1", tablet: "h6" } }}>
              Please login, to view your profile.
            </Typography>
          </Center>
        </Container>
      </Main>
    );
  }

  return (
    <Main>
      <Container>
        <Center sx={{ bgcolor: "bg.2" }}>
          <Box>
            <Typography
              component={"span"}
              sx={{ typography: { xs: "body1", tablet: "h6" } }}
            >
              Welcome,
            </Typography>{" "}
            <Typography
              component={"em"}
              sx={{ typography: { xs: "body1", tablet: "h6" } }}
            >
              {user?.name}
            </Typography>
            <br />
            <Typography
              component={"span"}
              sx={{ typography: { xs: "body1", tablet: "h6" } }}
            >
              Email:
            </Typography>{" "}
            <Typography
              component={"em"}
              sx={{ typography: { xs: "body1", tablet: "h6" } }}
            >
              {user?.email}
            </Typography>
          </Box>
        </Center>
      </Container>
    </Main>
  );
};

export default StyledUserProfile;
