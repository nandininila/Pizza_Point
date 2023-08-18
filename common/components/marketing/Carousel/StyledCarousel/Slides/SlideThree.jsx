import StyledNav from "@/common/components/shared/Navbar/StyledNav/StyledNav";
import { px2rem } from "@/common/hooks/FluidValue/converter/px2rem";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Button, Typography, styled } from "@mui/material";
import { amber } from "@mui/material/colors";
import Image from "next/image";

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    height: "auto",
    position: "relative",
  })
);

const TopImg = styled("div")(({ theme }) =>
  theme.unstable_sx({
    position: "absolute",
    top: 0,
    width: "7%",
    left: createFluidValue(9, 20),
  })
);

const PriceSection = styled("div")(({ theme }) =>
  theme.unstable_sx({
    pt: createFluidValue(0.7, 2.2),
    pb: createFluidValue(0.4, 1.2),
    pl: createFluidValue(0.5, 2),
    pr: createFluidValue(0.4, 1),
    width: createFluidValue(3.2, 10),
    bottom: "40%",
    left: 0,
    borderTop: `${createFluidValue(0.1, 0.12)} solid`,

    borderBottom: `${createFluidValue(0.1, 0.15)} solid`,
    borderRadius: `0 ${createFluidValue(0.5, 1.5)}  ${createFluidValue(
      0.5,
      1.5
    )} 0`,
    borderColor: "white",
    backdropFilter: `blur(${createFluidValue(0.2, 1)})`,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, .5)",

    "p:nth-of-type(1)": {
      color: "button.1",
      fontWeight: 500,
      textAlign: "right",
      fontSize: createFluidValue(0.5, 1.5),
      lineHeight: 0,
    },

    "p:nth-of-type(2)": {
      fontFamily: "var(--customFont)",
      color: "white",
      fontSize: createFluidValue(1.2, px2rem(60)),
      lineHeight: 0.85,
    },
  })
);

const Slide = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    // pt: createFluidValue(1, 2.5),
  })
);

const ImgContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "51.1%",
    position: "relative",
    pt: createFluidValue(1.1, 2.5),

    "& div": {
      position: "absolute",
    },

    "div:nth-of-type(1)": {
      top: createFluidValue(2.3, 10),
      right: createFluidValue(0.6, 1),
      width: "7%",
      rotate: "-70deg",
    },
    "div:nth-of-type(2)": {
      top: createFluidValue(1, 4),
      right: createFluidValue(2.8, 8),
      width: "7%",
      rotate: "-50deg",
      transform: "scaleX(-1)",
    },
    "div:nth-of-type(3)": {
      top: createFluidValue(1, 4.5),
      right: createFluidValue(1.3, 2.5),
      width: "12%",
    },
    "div:nth-of-type(4)": {
      top: createFluidValue(1.3, 4),
      width: "10%",
    },
    "div:nth-of-type(5)": {
      top: createFluidValue(6.7, 23.5),
      right: "1%",
      width: "10%",
      rotate: "-15deg",
      transform: "scaleX(-1)",
    },
    "div:nth-of-type(6)": {
      top: createFluidValue(0.8, 3.5),
      right: "-39.5%",
      rotate: "-70deg",
      width: "10%",
    },
  })
);

const TextsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "45%",
    textAlign: "right",
    pr: createFluidValue(0.4, 1),
    pl: createFluidValue(0, 1),

    "p:nth-of-type(1)": {
      color: "bg.2",
      fontWeight: "bold",
      fontSize: createFluidValue(3, 11),
      lineHeight: 1,
    },

    "p:nth-of-type(2)": {
      color: "inherit",
      fontWeight: "bold",
      fontSize: createFluidValue(3.16, 11.5),
      lineHeight: 0.45,
    },

    "p:nth-of-type(3)": {
      color: "inherit",
      fontSize: createFluidValue(0.46, 1.7),
      fontWeight: "300",
      pt: "1.5em",
    },

    "p:nth-of-type(4)": {
      // [theme.breakpoints.down("sm")]: {
      //   display: "none",
      // },
      color: "inherit",
      fontWeight: "600",
      fontSize: createFluidValue(0.6, 2.3),
      lineHeight: 2.5,

      span: {
        color: "text.2",
      },
    },
  })
);

const SlideThree = ({ slide }) => {
  const { title, subTitle, caption, description } = slide;
  const pizzaImg = slide?.img?.pizza;
  const { one, two, three, four, five, six, seven } = slide?.img?.ingredients;

  return (
    <>
      <Main>
        <TopImg>
          <Image src={one} alt="ingredients 1" />
        </TopImg>
        <StyledNav />
        <Slide>
          <ImgContainer>
            <Image src={pizzaImg} alt="pizza img" />
            <div>
              <Image src={two} alt="ingredients 2" />
            </div>
            <div>
              <Image src={three} alt="ingredients 3" />
            </div>
            <div>
              <Image src={four} alt="ingredients 4" />
            </div>
            <div>
              <Image src={five} alt="ingredients 5" />
            </div>
            <div>
              <Image src={six} alt="ingredients 6" />
            </div>
            <div>
              <Image src={seven} alt="ingredients 7" />
            </div>

            <PriceSection>
              <Typography>Tomato</Typography>
              <Typography className="neonTex">Flavour</Typography>
            </PriceSection>
          </ImgContainer>

          <TextsContainer>
            <Typography>{subTitle}</Typography>
            <Typography>{title}</Typography>
            <Typography>{caption}</Typography>
            <Typography>
              Only in <span>20 minutes</span>
            </Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{
                py: createFluidValue(0.3, 0.9),
                px: createFluidValue(1, 3.5),
                fontWeight: "500",
                textTransform: "capitalize",
                borderRadius: ".6em",
                bgcolor: "button.1",
                color: "text.1",
                fontSize: createFluidValue(0.35, 1.1),

                "&:hover": {
                  bgcolor: amber[600],
                },
                "&:focus": {
                  color: "white",
                  bgcolor: "bg.2",
                },
              }}
            >
              Watch Recipe
            </Button>
          </TextsContainer>
        </Slide>
      </Main>
    </>
  );
};

export default SlideThree;
