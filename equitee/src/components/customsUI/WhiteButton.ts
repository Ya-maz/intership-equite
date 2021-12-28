import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const WhiteButton = styled(Button, {
  name: "whiteButton"
})(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  margin: "0 5px",
  border: "1px solid rgba(0, 0, 0, 0)",
  "&:hover": {
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.secondary.light}`,
  }
}))

// (({ theme }) => ({
//   color: theme.palette.secondary.contrastText,
//   margin: "0 5px",
//   border: `1px solid ${theme.palette.secondary.contrastText}`,
// }));


export default WhiteButton