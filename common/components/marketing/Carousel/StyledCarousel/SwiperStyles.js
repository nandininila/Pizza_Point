import { createFluidValue } from "@/hooks/FluidValue/mix/FluidValue";

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

    // 
    "--autoplay-progress-font-size": `${createFluidValue(.47, 1.2)}`,
    "--autoplay-progress-stroke-width": `${createFluidValue(.25, .35)}`,

    // button
    "--swiper-navigation-size": `${createFluidValue(10, 10)}`,

    navigationContainer: {

        "& button": {
            color: "text.2",
            fontSize: createFluidValue(1.2, 2.7),
            bottom: createFluidValue(.2, 1.5),
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
        }
    },
}