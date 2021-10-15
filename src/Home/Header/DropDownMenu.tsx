import React from "react";
import Box from "@mui/material/Box";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import { SxProps } from "@mui/system";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

import Invits from "../Main/Feeds/Invits/Invits";
import Messages from "../Main/Messenger/Messages";
import Notifications from "../Main/Notifications/Notifications";

const DropDownMenu: React.FC<{ componentName: string }> = ({
  componentName,
}) => {
  let component, ariaLabel, icon;

  let notificationNumber = 0;

  switch (componentName) {
    case "Invits":
      component = <Invits />;
      ariaLabel = "Invitations";
      icon = <PersonAddIcon />;
      break;
    case "Messages":
      component = <Messages />;
      ariaLabel = "Messages";
      icon = <MailIcon />;
      break;
    case "Notifications":
      component = <Notifications />;
      ariaLabel = "Notifications";
      icon = <NotificationsIcon />;
      break;
    default:
      console.log("No such component");
  }

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const styles: SxProps = {
    position: "absolute",
    right: 0,
    zIndex: 1,
    border: "1px solid",
    p: 1,
    bgcolor: "background.paper",
    width: "300px",
    boxShadow: "2px 2px 0.5em currentColor",
    transition: "all .2s ease-in",
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box sx={{ position: "relative" }}>
        <IconButton
          size='large'
          aria-label={`show new ${notificationNumber} ${ariaLabel}`}
          color='inherit'
          onClick={handleClick}>
          <Badge badgeContent={notificationNumber} color='error'>
            {icon}
          </Badge>
        </IconButton>
        {open ? (
          <Box sx={styles}>
            {notificationNumber > 0 ? component : <h4>No new {ariaLabel}</h4>}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default DropDownMenu;
