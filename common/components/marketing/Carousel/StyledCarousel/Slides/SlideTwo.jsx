import StyledNav from "@/common/components/shared/Navbar/StyledNav/StyledNav";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import { Typography, styled } from "@mui/material";
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
    left: createFluidValue(10, 20),
  })
);

const Slide = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
    pt: createFluidValue(1.05, 2.5),
  })
);

const ImgContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "49%",
    position: "relative",

    "& div": {
      position: "absolute",
    },

    "div:nth-of-type(1)": {
      top: 0,
      left: 0,
      width: "10%",
    },
    "div:nth-of-type(2)": {
      top: "-5%",
      right: 0,
      width: "18%",
    },
    "div:nth-of-type(3)": {
      bottom: createFluidValue(1.5, 3),
      left: "-5%",
      width: "14%",
    },
  })
);

const TextsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "45%",
    pl: createFluidValue(0.4, 1),

    "p:nth-of-type(1)": {
      color: "bg.2",
      fontWeight: "bold",
      fontSize: createFluidValue(2.5, 9),
      pl: createFluidValue(0.2, 1),
    },

    "p:nth-of-type(2)": {
      color: "inherit",
      fontWeight: "bold",
      fontSize: createFluidValue(2.8, 9),
      lineHeight: 0.4,
    },

    "p:nth-of-type(3)": {
      color: "inherit",
      fontSize: createFluidValue(0.5, 1.9),
      fontWeight: "300",
      pt: "1.5em",
      pl: createFluidValue(0.2, 2.5),
    },

    "p:nth-of-type(4)": {
      fontSize: createFluidValue(0.5, 2.5),
      fontWeight: "500",

      "span:nth-of-type(2)": {
        color: "bg.2",
      },
    },
  })
);

const PriceSection = styled("div")(({ theme }) =>
  theme.unstable_sx({
    textAlign: "center",
    height: "30%",
    width: "30%",

    bottom: createFluidValue(1, 5),
    right: createFluidValue(1, 2),
    border: `${createFluidValue(0.1, 0.15)} solid`,
    borderRadius: "50%",
    borderColor: "border.1",
    backdropFilter: "blur(1rem)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",

    "p:nth-of-type(1)": {
      color: "button.1",
      fontWeight: "bold",
      fontSize: createFluidValue(0.6, 2),
      lineHeight: 3,
    },

    "p:nth-of-type(2)": {
      fontFamily: "var(--customFont)",
      color: "white",
      fontSize: createFluidValue(1.5, 5.8),
      lineHeight: 0.25,
    },
  })
);

const SlideTwo = ({ slide }) => {
  const { title, subTitle, caption, discount } = slide;
  const pizzaImg = slide?.img?.pizza;
  const { one, two, three, four } = slide?.img?.ingredients;

  return (
    <Main>
      <TopImg>
        <Image src={one} alt="ingredients 1" />
      </TopImg>

      <StyledNav />

      <Slide>
        <TextsContainer>
          <Typography>{subTitle}</Typography>
          <Typography>{title}</Typography>
          <Typography>{caption}</Typography>
          <Typography>
            <span>Weekend</span> <span>Special!</span>
          </Typography>
        </TextsContainer>

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

          <PriceSection>
            <Typography>Up to</Typography>
            <Typography>{discount}</Typography>
          </PriceSection>
        </ImgContainer>
      </Slide>
    </Main>
  );
};

export default SlideTwo;
