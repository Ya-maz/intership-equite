import { ThemeProvider } from "@mui/material/styles";
import BackgroundImage from "./customsUI/BackgroundImage";
import BackgroundColor from "./customsUI/BackgroundColor";
import Image from "next/image";
import main from "../../public/img.png";
import wave from "../../public/bg.svg";
import brand from "../../public/brand.svg";
import brandxs from "../../public/brandxs.svg";
import theme from "../theme";

const Background: React.FC = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <BackgroundColor>
        <BackgroundImage
          sx={{
            width: {xs: "160vw", md: "70vw",},
            height: { xs: "100vw", md: "70vh", },
            top: {xs: "33vh", md: 0},
            right: {xs: "0vw", md: "0vw",},
          }}
        >
          <Image
            alt="background-image"
            src={main}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>

        <BackgroundImage
          sx={{
            width: "100vw",
            height: "50vh",
            top: "45vh",
          }}
        >
          <Image
            alt="background-image"
            src={wave}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>

        <BackgroundImage
          sx={{
            display: {xs: "none", md: "block"},
            width: "70vw",
            height: "9vh",
            left: "15vw",
            top: "75vh",
          }}
        >
          <Image
            alt="background-image"
            src={brand}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>

        <BackgroundImage
          sx={{
            display: {xs: "block", md: "none"},
            width: "90vw",
            height: "11vh",
            left: "5vw",
            top: "75vh",
          }}
        >
          <Image
            alt="background-image"
            src={brandxs}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>
        {props.children}
      </BackgroundColor>
    </ThemeProvider>
  );
};

export default Background;
