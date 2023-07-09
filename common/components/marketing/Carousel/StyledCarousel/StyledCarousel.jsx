import { useRef } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Box, IconButton } from "@mui/material";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Slides } from "./Slides/Slides";

// data
import { SlidesData } from "@/content/data/SlidesData";
import { SwiperStyles } from "./SwiperStyles";

const Carousel = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
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
      >
        {SlidesData.map((slide, i) => (
          <SwiperSlide key={i}>
            <Slides slide={slide} i={i} />
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>

      <Box sx={SwiperStyles.navigationContainer}>
        <IconButton disableRipple className="arrow-next" size="small">
          <HiArrowCircleRight />
        </IconButton>

        <IconButton disableRipple className="arrow-prev" size="small">
          <HiArrowCircleLeft />
        </IconButton>
      </Box>
    </div>
  );
};

export default Carousel;
