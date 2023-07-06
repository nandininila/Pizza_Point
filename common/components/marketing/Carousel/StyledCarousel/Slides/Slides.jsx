import { Button, Typography, styled } from "@mui/material";
import Image from "next/image";
import imageURL from "/content/images/Background/BackgroundPaper.png";

const Main = styled("div")(({ theme }) =>
  theme.unstable_sx({
    height: "100%",
  })
);

const Slide = styled("div")(({ theme }) =>
  theme.unstable_sx({
    display: "flex",
    justifyContent: "space-between",
    // alignItems: "center",
    height: "100%",
    pt: "4%",
    pr: "1%",
  })
);
const ImgContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "50%",
  })
);

const TextsContainer = styled("div")(({ theme }) =>
  theme.unstable_sx({
    width: "45%",
    textAlign: "right",
    p: ".5em .5em 0 5%",

    "p:nth-of-type(1)": {
      color: "bg.2",
      fontWeight: "bold",
      fontSize: "clamp(1.1rem, 0.118rem + 4.909vw, 3.8rem)",
    },

    "p:nth-of-type(2)": {
      color: "inherit",
      fontWeight: "bold",
      fontSize: "clamp(3.1rem, 0.045rem + 15.273vw, 11.5rem)",
      lineHeight: 0.3,
    },

    "p:nth-of-type(3)": {
      color: "inherit",
      fontSize: "clamp(0.5rem, -0.045rem + 2.727vw, 2rem)",
      fontWeight: "300",
      pt: "1.5em",
      lineHeight: "2",
    },

    "p:nth-of-type(4)": {
      // [theme.breakpoints.down("sm")]: {
      //   display: "none",
      // },
      color: "inherit",
      fontWeight: "300",
      fontSize: "clamp(0.3rem, 0.045rem + 1.273vw, 1rem)",
      pb: "clamp(0.1rem, -0.591rem + 3.455vw, 2rem)",
    },
  })
);

export const Slides = ({ slide, i }) => {
  const { title, subTitle, caption, price, priceText, description } = slide;
  const pizzaImg = slide?.img?.pizza;

  return (
    <Main>
      <Image
        src={imageURL}
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
        }}
        alt="BackgroundImage"
        quality={100}
      />
      {/* {i === 0 && ( */}
      <Slide>
        <ImgContainer>
          <Image src={pizzaImg} alt="pizza img" />
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
              height: "2.8em",
              px: "clamp(1rem, 0.273rem + 3.636vw, 3rem)",
              fontWeight: "500",
              textTransform: "capitalize",
              borderRadius: ".6em",
              bgcolor: "button.1",
              color: "text.1",
              fontSize: "clamp(0.4rem, 0.036rem + 1.818vw, 1.4rem)",

              "&:hover": {
                bgcolor: "button.1",
              },
            }}
          >
            Order Now
          </Button>
        </TextsContainer>
      </Slide>
    </Main>
  );
};
