import { SxProps } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import { styled, alpha } from "@mui/material/styles";

export const styles: SxProps = {
  position: "absolute",
  top: "3em",
  zIndex: 1,
  bgcolor: "#f4f6fa",
  width: "100%",
  transition: "all .2s ease-in",
  padding: "0.8em !important",
  paddingLeft: "1em !important",
  boxShadow: "2px 0 10px -1px #f2f3f4 !important",
};

export const Search = styled("div")(({ theme }) => ({
  width: "100%",
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  marginRight: theme.spacing(2),
  marginLeft: 0,
  margin: 0,
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    backgroundColor: "rgb(244, 246, 250) !important",
    boxShadow: " 0 0 4px -3px black !important",
    color: "black !important",
    padding: "1.5em !important",
    paddingLeft: "3em !important",
    width: "100%",
  },
}));
