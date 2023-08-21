import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import {
  Button,
  Paper,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import L_Img from "../../../../../content/images/Features/feature_1.webp";
import R_Img from "../../../../../content/images/Features/feature_2.webp";

const Main = styled("div")(({ theme }) => theme.unstable_sx({ width: "100%" }));

const Container = styled(Paper)(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: createFluidValue(0.4, 1),

    display: "flex",
    // alignSelf: "center",
  })
);

const LeftImg = styled("div")(({ theme }) =>
  theme.unstable_sx({
    alignSelf: "center",
    flex: 1,
    display: { xs: "none", sm: "block" },
  })
);

const RightImg = styled("div")(({ theme }) =>
  theme.unstable_sx({ flex: 1, display: { xs: "none", sm: "block" } })
);

const DiscoverOurMenu = styled("div")(({ theme }) =>
  theme.unstable_sx({
    alignSelf: "flex-end",
    flex: 2,
    pt: { xs: "7%", md: 0 },
  })
);

const MenuButtons = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    gap: { xs: 0.8, sm: 1, md: 1.5 },
    justifyContent: "center",
    flexWrap: "wrap",
    pt: { xs: "4%", sm: "5%" },
  })
);

const MenuButton = styled(Button)(({ theme }) =>
  theme.unstable_sx({
    textTransform: "capitalize",
    py: 0,
    borderRadius: 25,
    fontSize: createFluidValue(0.6, 1.1),
  })
);

const Texts = styled("div")(({ theme }) =>
  theme.unstable_sx({
    textAlign: "center",

    "p:nth-of-type(1)": {
      color: "warning.light",
      fontSize: createFluidValue(0.65, 1.3),
    },

    "p:nth-of-type(2)": {
      fontWeight: "bold",
      fontSize: createFluidValue(0.9, 1.8),
    },
  })
);

const StyledOurMenu = () => {
  const theme = useTheme();
  let mode = theme.palette.mode;

  let responsive;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    responsive = "small";
  }

  if (useMediaQuery(theme.breakpoints.up("md"))) {
    responsive = "large";
  }

  const data = [
    {
      title: "Pizza",
    },
    {
      title: "Calzones",
    },
    {
      title: "Wraps",
    },
    {
      title: "Salads",
    },
    {
      title: "Sides",
    },
    {
      title: "Pasta Dinner",
    },
    {
      title: "Dinners",
    },
    {
      title: "Grill & Seafood",
    },
    {
      title: "Ice Cream",
    },
    {
      title: "Kids",
    },
  ];
  return (
    <Main>
      <Container>
        <LeftImg>
          <Image src={L_Img} alt="LImg" />
        </LeftImg>

        <DiscoverOurMenu>
          <Texts>
            <Typography>OUR MENU</Typography>
            <Typography>Discover Our Menu</Typography>
          </Texts>

          <MenuButtons>
            {data.map((d, i) => (
              <MenuButton
                variant="outlined"
                size={responsive}
                color="warning"
                key={i}
                sx={{
                  color: "warning.light",
                  "&:focus": {
                    bgcolor:
                      mode === "light" ? "warning.light" : "warning.dark",
                    color: "white",
                  },

                  ":hover": {
                    boxShadow: "0 0 0 0.1rem #ff9800",
                  },
                }}
              >
                {d.title}
              </MenuButton>
            ))}
          </MenuButtons>
        </DiscoverOurMenu>

        <RightImg>
          <Image src={R_Img} alt="RImg" />
        </RightImg>
      </Container>
    </Main>
  );
};

export default StyledOurMenu;
