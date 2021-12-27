import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#101c2b",
      paper: "#162537"
      
    },
  },
  typography: {
    fontFamily: "Raleway, Arial",
    h1: {
      fontSize: "2.14rem",
      "@media (min-width:600px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontSize: "1.42rem",
      "@media (min-width:600px)": {
        fontSize: "2.5rem",
      },
    },
  },
});

export default theme;