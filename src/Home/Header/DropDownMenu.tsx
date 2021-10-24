import React from "react";

import ClickAwayListener from "@mui/material/ClickAwayListener";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

import { SxProps } from "@mui/system";

//// import icons
import IconButton from "@mui/material/IconButton";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";

//// import FCs
import Invits from "../Main/Feeds/Invits/Invits";
import Messages from "../Main/Notifications/Messages";
import Notifications from "../Main/Notifications/Notifications";

const DropDownMenu: React.FC<{ componentName: string }> = ({
  componentName,
}) => {
  /// reserved these 3 for making the component reusable
  let component, ariaLabel, icon;

  /// notificationNumber should be the length of the database
  let [notificationNumber, setNotificationNumber] = React.useState(3);

  /// detect the component type
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

  //// detect if the menu is open
  const [open, setOpen] = React.useState(false);

  //// hadnle on Click
  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  //// handle on Click away
  //// we have an option, if u click to see your notifs,
  //// then u wanna keep it unread,
  //// click again on the icon, otherwise click away
  const handleClickAway = () => {
    if (open) setNotificationNumber(0);
    setOpen(false);
  };

  const style: SxProps = {
    position: "absolute",
    right: 0,
    zIndex: 1,
    border: "5px solid #f2f3f4",
    borderRadius: "3px",
    padding: "1.5em .8em 1.5em .8em !important",
    bgcolor: "#f4f6fa",
    minWidth: "350px",
    boxShadow: "2px 0 10px -1px #f2f3f4 !important",
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
          <Box sx={style}>
            {notificationNumber === 0 && (
              <>
                <div style={{ textAlign: "center" }}>
                  <h4>No new {ariaLabel}</h4>
                </div>
                <Divider
                  style={{
                    margin: "1em auto",
                    width: "100%",
                  }}
                />
              </>
            )}
            {component}
          </Box>
        ) : null}
      </Box>
    </ClickAwayListener>
  );
};

export default DropDownMenu;
