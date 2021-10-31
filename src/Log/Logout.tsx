import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "./../firebase";
import { useHistory } from "react-router";
export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const history = useHistory();

  const handleSignOut = async () => {
    setOpen(true);

    try {
      await auth.signOut().then(() => {
        history.push("/");
        console.log("Signed out");
      });
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
