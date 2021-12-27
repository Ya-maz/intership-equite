import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const WhiteButton = styled(Button)({
  color: "white",
  margin: "0 5px",
  border: "1px solid rgba(0, 0, 0, 0)",
  "&:hover": {
    background: "#101c2b",
    border: "1px solid #eee4ff"
  }
})

export default WhiteButton