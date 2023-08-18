// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Box, IconButton } from "@mui/material";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// data
import { SlidesData } from "@/common/content/data/SlidesData";
import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";
import Image from "next/image";
import { useRef, useState } from "react";
import { Slides } from "./Slides/Slides";
import { SwiperStyles } from "./css/SwiperStyles";
import AutoplayProgress from "./features/AutoplayProgress";
import BackgroundImg from "/common/content/images/Background/BackgroundPaper.png";

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  // buttons
  // let left;
  // let right =
  // let rightTwo =

  let display;

  if (activeIndex === 1) {
    // left = "-75%";
    // right = 0;
    // rightTwo = createFluidValue(2.7, 7);

    display = "none";
  }

  const navigationContainer = {
    "& button": {
      display: display,
      color: "text.2",
      fontSize: createFluidValue(1.2, 2.7),
      bottom: createFluidValue(0.2, 1.5),
      zIndex: 10,
      cursor: "pointer",
      right: createFluidValue(0, 1.8),
    },

    "button:nth-of-type(1)": {
      position: "absolute",
    },

    "button:nth-of-type(2)": {
      position: "absolute",
      right: createFluidValue(1.5, 5),
    },
  };

  return (
    <div className="sliderContainer">
      <Image
        src={BackgroundImg}
        style={{
          zIndex: -1,
          position: "absolute",
          objectFit: "cover",
          height: "100%",
        }}
        priority
        alt="BackgroundImage"
        quality={100}
      />
      <div className="mySwiper">
        <Swiper
          style={SwiperStyles}
          autoplay={{
            delay: 10000,
            disableOnInteraction: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: ".arrow-next",
            prevEl: ".arrow-prev",
            disabledClass: "swiper-button-disabled",
          }}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          onRealIndexChange={(element) => setActiveIndex(element.activeIndex)}
        >
          {SlidesData.map((slide, i) => (
            <SwiperSlide key={i}>
              <Slides slide={slide} i={i} />
            </SwiperSlide>
          ))}

          <AutoplayProgress
            activeIndex={activeIndex}
            progressCircle={progressCircle}
            progressContent={progressContent}
          />
        </Swiper>

        <Box sx={navigationContainer}>
          <IconButton disableRipple className="arrow-next" size="small">
            <HiArrowCircleRight />
          </IconButton>

          <IconButton disableRipple className="arrow-prev" size="small">
            <HiArrowCircleLeft />
          </IconButton>
        </Box>
      </div>
    </div>
  );
};

export default Carousel;
