import { createTheme } from "@mui/material/styles";
const font = "'Poppins', sans-serif";



const theme = createTheme({

    typography: {
        fontFamily: font,
    },

    palette: {
        mode: "light",

        text: {
            1: "#272d2e",
            2: "#db2527",
        },

        bg: {
            1: "#eaeaea",
            2: "#d50306",
        },



    },
});

export default theme;