import type { NextPage } from "next";
import Background from "../src/components/Background";
import Header from "../src/components/Header";
import Main from "../src/components/Main";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Header />
        <Main />
      </Background>
    </ThemeProvider>
  );
};

export default Home;
