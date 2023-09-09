import StyledNav from "@/common/components/shared/Navbar/StyledNav/StyledNav";
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
    px: createFluidValue(0.3, 1.2),
    pt: createFluidValue(0.4, 1),
    display: "flex",
    alignItems: "start",
    bottom: "20%",
    right: "0%",
    border: `${createFluidValue(0.1, 0.15)} solid`,
    borderRadius: createFluidValue(0.3, 1.2),
    borderColor: "border.1",
    backdropFilter: `blur(${createFluidValue(0.1, 0.4)})`,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",

    "p:nth-of-type(1)": {
      fontFamily: "serif",
      fontWeight: "300",
      fontSize: createFluidValue(1.8, 6),
      color: "white",
      lineHeight: 1,

      "span:nth-of-type(1)": {
        fontSize: ".7em",
      },
    },

    "p:nth-of-type(2)": {
      pt: createFluidValue(0.2, 0.8),
      pl: createFluidValue(0.4, 1),
      textAlign: "right",
      color: "bg.2",
      fontWeight: "bold",
      lineHeight: 0.9,
      fontSize: createFluidValue(0.623, 1.9),
    },
  })
);

const Slide = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    pt: createFluidValue(1, 2.5),
  })
);

const ImgContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "55%",
    position: "relative",

    "img:nth-of-type(1)": {
      width: "90.5%",
    },

    "& div": {
      position: "absolute",
    },

    "div:nth-of-type(1)": {
      bottom: 0,
      right: "-25%",
      width: "10%",
    },
    "div:nth-of-type(2)": {
      top: createFluidValue(0.5, 1.5),
      right: createFluidValue(2, 7),
      width: "7%",
    },
    "div:nth-of-type(3)": {
      top: createFluidValue(1, 4.5),
      right: createFluidValue(0.3, 1.2),
      width: "14%",
    },
    "div:nth-of-type(4)": {
      top: createFluidValue(1, 4),
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
      fontSize: createFluidValue(1.1, 4),
    },

    "p:nth-of-type(2)": {
      color: "inherit",
      fontWeight: "bold",
      fontSize: createFluidValue(3.1, 11.5),
      lineHeight: 0.3,
    },

    "p:nth-of-type(3)": {
      color: "inherit",
      fontSize: createFluidValue(0.5, 1.9),
      fontWeight: "300",
      pt: "1.5em",
      lineHeight: "2",
    },

    "p:nth-of-type(4)": {
      // [theme.breakpoints.down("sm")]: {
      //   display: "none",
      // },
      pl: createFluidValue(0, 4),
      color: "inherit",
      fontWeight: "300",

      fontSize: createFluidValue(0.3, 1),
      pb: createFluidValue(0.1, 1.5),
    },
  })
);

export const SlideOne = ({ slide }) => {
  const { title, subTitle, caption, price, description } = slide;
  const pizzaImg = slide?.img?.pizza;
  const { one, two, three, four, five } = slide?.img?.ingredients;

  return (
    <>
      <Main>
        <TopImg>
          <Image src={one} alt="ingredients 1" />
        </TopImg>
        <StyledNav />
        <Slide>
          <ImgContainer>
            <Image src={pizzaImg} alt="pizza img" priority={true} />
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

            <PriceSection>
              <Typography className="neonText">
                <span>$</span>
                {price}
              </Typography>

              <Typography>
                Get <br /> only
              </Typography>
            </PriceSection>
          </ImgContainer>

          <TextsContainer>
            <Typography>{subTitle}</Typography>
            <Typography>{title}</Typography>
            <Typography>{caption}</Typography>
            <Typography>{description}</Typography>

            <Button
              variant="contained"
              disableElevation
              sx={{
                height: createFluidValue(1.2, 3.5),
                px: createFluidValue(1, 3.5),
                fontWeight: "500",
                textTransform: "capitalize",
                borderRadius: ".6em",
                bgcolor: "button.1",
                color: "text.1",
                fontSize: createFluidValue(0.4, 1),

                "&:hover": {
                  bgcolor: amber[600],
                },
                "&:focus": {
                  color: "white",
                  bgcolor: "bg.2",
                },
              }}
            >
              Order Now
            </Button>
          </TextsContainer>
        </Slide>
      </Main>
    </>
  );
};
