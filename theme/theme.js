import { createTheme } from "@mui/material/styles";
const font = "'Poppins', sans-serif";



const theme = createTheme({

    typography: {
        fontFamily: font,
    },

    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1536,

            mobile: 640,
            tablet: 768,
            laptop: 1024,
        },
    },

    palette: {
        mode: "dark",

        text: {
            1: "#272d2e",
            2: "#db2527",
        },

        bg: {
            1: "#eaeaea",
            2: "#d50306",
        },

        button: {
            1: "#ffcf29",
        }
        
    },
});

export default theme;