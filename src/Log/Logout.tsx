import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "./../firebase";

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleSignOut = () => {
    setOpen(false);

    try {
      setTimeout(() => {
        auth.signOut().then(() => console.log("Signed out"));
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={handleSignOut}
        variant='outlined'
        color='error'
        style={{ marginLeft: "3em", minWidth: "fit-content" }}>
        <LogoutIcon />
      </Button>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}>
        <CircularProgress color='inherit' />
      </Backdrop>
    </>
  );
}
