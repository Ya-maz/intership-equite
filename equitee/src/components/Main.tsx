import { useState, useEffect } from "react";
import { Grid, Typography } from "@mui/material";
import NeonButton from "./customsUI/NeonButton";
import Cub from "./customsUI/CubCarousel";
import theme from "../theme";

const Main: React.FC = () => {
  const [active, setActive] = useState(0);
  const ItemsCub = [0, 1, 2];
  useEffect(() => {
    const timerId = setInterval(() => {
      setActive((active + 1) % ItemsCub.length);
    }, 3000);
    return () => clearInterval(timerId);
  });

  return (
    <>
      <Grid
        component="section"
        container
        alignItems="center"
        sx={{
          mt: {xs: 13,md:15},
          ml: {xs: 0, md:30},
          maxWidth: { md:550},
          justifyContent: { xs: "center", md: "start" }
        }}
      >
        <Grid item sx={{ textAlign: { xs: 'center', md: 'start' }}}>
          <Typography color="white" variant="h1" >
            Поделитесь своими результатами
          </Typography>
        </Grid>
        <Grid item sx={{
          textAlign: { xs: 'center', md: 'start' },
          maxWidth: {xs: 300, md:550}}}>
          <Typography
            color="secondary"
            variant="h2"
            gutterBottom
            sx={{
              textTransform: "uppercase",
              mt: 3,
            }}
          >
            и получите доверие большого количетсво инвесторов
          </Typography>
        </Grid>

        <Grid
          item
          sx={{
            mt: 3,
          }}
        >
          <NeonButton color="secondary" variant="contained" sx={{ px: 3.5 }}>
            Начать
          </NeonButton>
          <NeonButton
            sx={{ mx: 2, background: theme.palette.background.paper }}
            color="secondary"
            variant="outlined"
          >
            Я трейдер
          </NeonButton>
        </Grid>
      </Grid>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{ mt: 8 }}
      >
        <Grid item>
          {ItemsCub.map((_, i) => (
            <Cub sx={{
              mt: {xs: "33vh", md: 0},
              mx: {xs: "2vw", md: ".5vw"},
              width: { xs: "3vw", md: ".75vw" },
              height: { xs: "3vw", md: "1.5vh" },
            }} key={i} active={active === i} />
          ))}
        </Grid>
      </Grid>
      </>
  );
};

export default Main;
