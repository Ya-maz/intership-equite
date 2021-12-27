import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const BackgroundImage = styled(Box, {
  name: "BackgroundImage",
  slot: "bgi",
})({
  position: "fixed",
  overflow: "hidden",
  zIndex: "-1"
});

export default BackgroundImage;
