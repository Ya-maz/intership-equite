import BackgroundImage from "./customsUI/BackgroundImage";
import BackgroundColor from "./customsUI/BackgroundColor";
import Image from "next/image";
import main from "../../public/img.png";
import wave from "../../public/bg.svg";
import brand from "../../public/brand.svg";
import brandxs from "../../public/brandxs.svg";
import { Grid } from "@mui/material";
import Cub from "./customsUI/CubCarousel"
import { useState, useEffect } from "react";

const Background: React.FC = (props) => {
  const [active, setActive] = useState(0);
  const ItemsCub = [0, 1, 2];
  useEffect(() => {
    const timerId = setInterval(() => {
      setActive((active + 1) % ItemsCub.length);
    }, 3000);
    return () => clearInterval(timerId);
  });
  return (
    <BackgroundColor>
      <BackgroundImage
        sx={{
          width: { xs: "160vw", md: "70vw" },
          height: { xs: "100vw", md: "70vh" },
          top: { xs: "33vh", md: 0 },
          right: { xs: "0vw", md: "0vw" },
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

      <Grid container justifyContent="center">
        <BackgroundImage
          sx={{
            display: { xs: "none", md: "flex" },
            minWidth: "70vw",
            maxWidth: "100vw",
            minHeight: "5vh",
            maxHeight: "30vh",
            top: "75vh",
          }}
        >
          <Image
            alt="background-image"
            src={brand}
            layout="intrinsic"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>

        <BackgroundImage
          sx={{
            display: { xs: "flex", md: "none" },
            minWidth: "70vw",
            maxWidth: "100vw",
            minHeight: "5vh",
            maxHeight: "30vh",
            top: "75vh",
            // position: "relative"
          }}
        >
          <Image
            alt="background-image"
            src={brandxs}
            layout="intrinsic"
            objectFit="cover"
            quality={100}
          />
        </BackgroundImage>
      </Grid>
      {props.children}
    </BackgroundColor>
  );
};

export default Background;
