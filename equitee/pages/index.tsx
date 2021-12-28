import type { NextPage } from "next";
import Background from "../src/components/Background";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";
import { Grid } from "@mui/material";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Grid
          container
          sx={{
            px: { xs: 0, md: 20 },
          }}
        >
          <Header />
          <Main />
        </Grid>
      </Background>
    </ThemeProvider>
  );
};

export default Home;
