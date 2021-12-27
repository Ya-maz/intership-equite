import {
  Grid,
  AppBar,
  IconButton,
  Button,
  Typography,
  Icon,
} from "@mui/material";
import Image from "next/image";
import WhiteButton from "./customsUI/WhiteButton";
import InvestorButton from "./customsUI/InvestorButton";
import NeonButton from "./customsUI/NeonButton";
import logo from "../../public/logo-01.png";
import menu from "../../public/menu.svg";
import theme from "../theme";

const Header: React.FC = () => {
  return (
    <AppBar sx={{ boxShadow: 0 }} color="transparent" position="fixed">
      <Grid
        container
        alignItems="center"
        sx={{
          justifyContent: { xs: "space-between", md: "space-around" },
          mt: 0.5,
        }}
      >
        <Grid item>
          <IconButton>
            <Image
              width={48}
              height={56}
              src={logo}
              alt="logo"
              layout="intrinsic"
              objectFit="contain"
              quality={100}
            />
          </IconButton>

          <Typography
            variant="h2"
            sx={{
              display: { xs: "inline-flex", md: "none" },
              textTransform: "uppercase",
              color: theme.palette.secondary.contrastText,
              px: theme.spacing(2),
            }}
          >
            equite.io
          </Typography>
          <WhiteButton
            disableRipple={true}
            variant="outlined"
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            главное
          </WhiteButton>
          <WhiteButton
            disableRipple={true}
            variant="outlined"
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            рейтинг
          </WhiteButton>
          <WhiteButton
            disableRipple={true}
            variant="outlined"
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            pro
          </WhiteButton>
          <InvestorButton
            disableRipple={true}
            variant="outlined"
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            ИНВЕСТОРУ
          </InvestorButton>
        </Grid>

        <Grid item>
          <Button
            sx={{
              px: 0,
              py: { xs: 0.7, md: 0.5 },
              mx: { xs: 2, md: 0 },
              minWidth: 42,
              background: theme.palette.background.paper,
              border: "1px solid transparent",
            }}
            color="secondary"
            variant="outlined"
          >
            Ru
          </Button>
          <Button
            sx={{
              mx: 2,
              background: theme.palette.background.paper,
              display: { xs: "none", md: "inline-flex" },
            }}
            color="secondary"
            variant="outlined"
          >
            Войти
          </Button>
          <NeonButton
            color="secondary"
            variant="contained"
            sx={{
              display: { xs: "none", md: "inline-flex" },
            }}
          >
            Начать
          </NeonButton>

          <Button
            sx={{
              p: 0,
              mr: 2,
              minWidth: 42,
              minHeight: 39,
              background: theme.palette.background.paper,
              display: { xs: "inline-flex", md: "none" },
            }}
            color="secondary"
            variant="outlined"
          >
            <Image
              width={22}
              height={15}
              src={menu}
              alt="logo"
              layout="fixed"
              objectFit="contain"
              quality={100}
            />
          </Button>
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Header;
