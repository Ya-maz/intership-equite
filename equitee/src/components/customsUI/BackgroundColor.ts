import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const BackgroundColor = styled(Grid, {
  name: "main-background",
  slot: "wrappper",
})(({ theme }) => ({
  background: theme.palette.background.default,
  position: "fixed",
  height: "100vh",
  width: "100vw",
  overflow: "hidden",
  zIndex: "-2",
}));

export default BackgroundColor;
