import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const NeonButton = styled(Button, {
  name: "neon-button",
  slot: "wrappper",
})(({ theme }) => ({
  display: "inline-block",
  textTransform: "uppercase",
  border: "1px solid trasparent",
  textDecoration: "none",
  overflow: "hidden",
  boxShadow:
    `0 0 2px ${theme.palette.secondary.main},
    0 0 5px ${theme.palette.secondary.main},
    0 0 10px ${theme.palette.secondary.main}`,
}));
export default NeonButton;
