import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

const InvestorButton = styled(Button, {
  name: "WhiteButton",
  slot: "AnotherButton",
})(({ theme }) => ({
  color: theme.palette.secondary.contrastText,
  margin: "0 5px",
  border: `1px solid ${theme.palette.secondary.contrastText}`,
}));


export default InvestorButton
