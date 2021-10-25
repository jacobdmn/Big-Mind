import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";

export const StyledScream = styled(Card)({
  boxShadow: "0px 0 20px 2px #f2f3f4 !important",

  "& *": {
    fontFamily: "unset !important",
  },

  //// styling the full name
  "span.css-et1ao3-MuiTypography-root, span.css-14tqbo1": {
    fontWeight: "bold",
    fontSize: "1em",
    lineHeight: "1.5",
    letterSpacing: "0.01071em",
    color: "rgba(0, 0, 0, 0.7)",
  },

  //// image
  "img.imgBody": {
    height: "clamp(250px, calc(100px + 40vw), 450px)",
  },

  //// body
  "div.screamBody > *": {
    fontFamily: "unset !important",
    fontWeight: "500 !important",
    fontSize: "1em !important",
    lineHeight: "1.5 !important",
    letterSpacing: "0.01071em !important",
  },
});
