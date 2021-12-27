import type { NextPage } from "next";
import Background from "../src/components/Background";
import Header from "../src/components/Header";
import Main from "../src/components/Main";

const Home: NextPage = () => {
  return (
    <Background>
      <Header />
      <Main />
    </Background>
  );
};

export default Home;
