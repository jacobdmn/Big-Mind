import { styled } from "@mui/material/styles";

export const StyledForm = styled("form")({
  display: "grid",
  alignItems: "center",
  gridTemplateColumns: "auto 1fr auto auto",
  padding: "0.7em 1em",

  "& .MuiTextField-root": {
    m: "0.5em",
    width: "auto",

    "& label": {
      opacity: "0.7",
      letterSpacing: "1px",
      fontFamily: "unset",
    },

    "& fieldset": {
      border: "none",
      outline: "none",
    },
  },
});
export const StyledInput = styled("input")({
  display: "none",
});
