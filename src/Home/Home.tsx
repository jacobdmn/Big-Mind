import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import CircularProgress from "@mui/material/CircularProgress";
import DoneIcon from "@mui/icons-material/Done";
import "./css/Home.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

export class handleLoadingAnimation {
  //// Typescripting all variables
  // [setLoading, contentDefault, setContentDefault, loadingWord, doneWord]
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  contentDefault: { label: string; icon: JSX.Element };
  setContentDefault: React.Dispatch<
    React.SetStateAction<{
      label: string;
      icon: JSX.Element;
    }>
  >;
  loadingWord: string;
  doneWord: string;

  //// Initialization
  constructor(
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    contentDefault: { label: string; icon: JSX.Element },
    setContentDefault: React.Dispatch<
      React.SetStateAction<{
        label: string;
        icon: JSX.Element;
      }>
    >,
    loadingWord = "LOADING",
    doneWord = "DONE"
  ) {
    this.setLoading = setLoading;
    this.contentDefault = contentDefault;
    this.setContentDefault = setContentDefault;
    this.loadingWord = loadingWord;
    this.doneWord = doneWord;
  }

  /// Set LOADING icon
  setLoadingFunc = () => {
    this.setLoading(true);
    this.setContentDefault({
      label: this.loadingWord,
      icon: <CircularProgress />,
    });
  };

  /// set DONE icon
  setDoneFunc = () => {
    this.setContentDefault({
      label: this.doneWord,
      icon: <DoneIcon />,
    });
    setTimeout(() => {
      this.setContentDefault(this.contentDefault);
      this.setLoading(false);
    }, 1000);
  };
}
export const StyledAvatar: React.FC<{ src?: string; fullName?: string }> = ({
  src = "",
  fullName = "",
}) => {
  return src ? (
    <Avatar
      src={src}
      sx={{
        width: "50px",
        height: "50px",
      }}
    />
  ) : (
    <Avatar
      sx={{ backgroundColor: "#539b27", width: "50px", height: "50px" }}
      aria-label='recipe'>
      {fullName.split("")[0].toUpperCase()}
    </Avatar>
  );
};

export const StyledButton: React.FC<{
  variant?: "contained" | "text" | "outlined" | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  endIcon?: JSX.Element;
  disabled?: boolean;
  sxPlus?: {};
}> = ({
  variant = "contained",
  children,
  onClick,
  endIcon,
  sxPlus = {},
  disabled = false,
}) => {
  return (
    <Button
      sx={{
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
        },
        ...sxPlus,
      }}
      variant={variant}
      endIcon={endIcon}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </Button>
  );
};
const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='body'>
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
