import { styled } from "@mui/material/styles";

interface ButtonProps {
  active: boolean;
}

const Cub = styled("button", {
  name: "Cub",
})<ButtonProps>(({ theme, active }) => ({
  display: "inline-flex",
  background: active
    ? theme.palette.secondary.main
    : theme.palette.background.default,
  border: `1px solid ${theme.palette.secondary.main}`,
  boxShadow: `0px 0px 20px ${theme.palette.secondary.main}`,
  transform: "rotate(45deg)",
}));

export default Cub