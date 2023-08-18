import { createFluidValue } from "@/common/hooks/FluidValue/mix/FluidValue";

export const SwiperStyles = {
    // "--swiper-pagination-bullet-width": "8px",
    // "--swiper-pagination-bullet-height": "8px",  

    "--swiper-pagination-color": "#db2527",
    "--swiper-pagination-bullet-inactive-color": "#999999",
    "--swiper-pagination-bullet-inactive-opacity": "1",
    "--swiper-pagination-bullet-offset": `${createFluidValue(0.13, .34)}`,

    "--swiper-pagination-bullet-size": `${createFluidValue(0.3, .7)}`,
    "--swiper-pagination-bullet-horizontal-gap": `${createFluidValue(
        0.25,
        .9
    )}`,
    "--swiper-pagination-bottom": `${createFluidValue(.4, 1.5)}`,

    // button
    "--swiper-navigation-size": "10rem",

    "--price-text-shadow": `0 1px 2px #d50306, 1px 3px 1px #d50306, ${createFluidValue(0, .2)} ${createFluidValue(.1, .3)} 1px #d50306`,
};