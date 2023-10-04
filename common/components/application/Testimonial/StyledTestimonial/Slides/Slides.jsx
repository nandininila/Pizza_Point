import {
  Avatar,
  Box,
  Paper,
  Rating,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import arrayShuffle from "array-shuffle";
import axios from "axios";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";

// styles
const SwiperContainer = styled(Swiper)(({ theme }) =>
  theme.unstable_sx({
    "--swiper-pagination-bullet-inactive-color": theme.palette.warning.main,
    "--swiper-pagination-color": theme.palette.warning.light,
    "--swiper-pagination-bullet-size": "0.8rem",
    "--swiper-pagination-bullet-horizontal-gap": "0.5rem",
  })
);

const Slides = () => {
  const theme = useTheme();
  const [userData, setUserData] = useState([]);
  const randomUser = async () => {
    //   event.preventDefault();

    try {
      const url = "https://reqres.in/api/users?page=1";
      const res = await axios.get(url);
      const data = res.data.data;
      const sliceData = data.slice(0, 5);
      const shuffleData = arrayShuffle(sliceData);
      setUserData(shuffleData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    randomUser();
  }, [setUserData]);

  let slidesPerView = 2;
  if (useMediaQuery(theme.breakpoints.up("laptop"))) {
    slidesPerView = 3;
  }

  return (
    <SwiperContainer
      slidesPerView={slidesPerView}
      spaceBetween={15}
      grabCursor={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      {userData.map((data, i) => (
        <SwiperSlide key={i}>
          <Box pt={4}>
            <Paper
              elevation={3}
              sx={{
                px: 2,
                py: { xs: 3, tablet: 2.5 },
                mb: 6,
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                position: "relative",
                userSelect: "none",
              }}
            >
              <Avatar
                alt={data?.first_name}
                src={data?.avatar}
                sx={{ position: "absolute", top: "-15%" }}
              />

              <Typography variant="body2" color="text.secondary" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </Typography>
              <Typography fontWeight="600" variant="subtitle1" noWrap>
                {data?.first_name} {data?.last_name}
              </Typography>
              <Rating value={data?.id} readOnly />
            </Paper>
          </Box>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};

export default Slides;
