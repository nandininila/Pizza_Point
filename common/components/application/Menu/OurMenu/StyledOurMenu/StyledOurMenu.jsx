import { ThemeContext } from "@/common/contexts/ThemeModeProvider";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import {
  Button,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";

import { useContext } from "react";
import L_Img from "../../../../../content/images/Features/feature_1.webp";
import R_Img from "../../../../../content/images/Features/feature_2.webp";
import BackgroundImg from "/common/content/images/Background/BackgroundPaper.webp";

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    position: "relative",
  })
);

const Container = styled("div")(({ theme }) =>
  theme.unstable_sx({
    maxWidth: "lg",
    margin: "0 auto",
    px: createFluidValue(0.4, 1),

    display: "flex",
    // alignSelf: "center",
    // backdropFilter: `blur(${createFluidValue(0.2, 1)})`,
    // backgroundColor: "rgba(255, 255, 255, 0)",
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
    // pt: { xs: "7%", md: 0 },
    pt: "7%",
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

  const { allData, selectedCategory, setSelectedCategory } =
    useContext(ThemeContext);

  const categories = allData.map((x) => x.category);
  const uniqueCategories = [...new Set(categories)];

  let responsive;
  if (useMediaQuery(theme.breakpoints.down("sm"))) {
    responsive = "small";
  }

  if (useMediaQuery(theme.breakpoints.up("md"))) {
    responsive = "large";
  }

  return (
    <Main>
      <Image
        src={BackgroundImg}
        style={{
          display: "none",
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          height: "100%",
        }}
        priority
        alt="BackgroundImage"
        quality={100}
      />
      <Container>
        <LeftImg>
          <Image src={L_Img} alt="LImg" priority />
        </LeftImg>

        <DiscoverOurMenu>
          <Texts>
            <Typography>OUR MENU</Typography>
            <Typography>Discover Our Menu</Typography>
          </Texts>

          <MenuButtons>
            {uniqueCategories?.map((c, i) => (
              <MenuButton
                variant="outlined"
                size={responsive}
                color="warning"
                key={i}
                onClick={() => setSelectedCategory(c)}
                sx={{
                  color: selectedCategory === c ? "white" : "warning.light",
                  bgcolor: selectedCategory === c && "warning.light",

                  ":hover": {
                    bgcolor: selectedCategory === c && "warning.light",
                    boxShadow: "0 0 0 0.1rem #ff9800",
                  },

                  ":focus": {
                    boxShadow: "none",
                  },
                }}
              >
                {c}
              </MenuButton>
            ))}
          </MenuButtons>
        </DiscoverOurMenu>

        <RightImg>
          <Image src={R_Img} alt="RImg" priority />
        </RightImg>
      </Container>
    </Main>
  );
};

export default StyledOurMenu;
