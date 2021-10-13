import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import "./css/Contacts.css";
const Contact: React.FC<{
  fullName: string;
  userAvatar: string;
  lastTimeActive: number | string;
}> = ({ fullName, userAvatar, lastTimeActive }) => {
  return (
    <div className='ContactItem'>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={userAvatar} />
        </ListItemAvatar>
        <ListItemText
          primary={fullName}
          secondary={lastTimeActive}
          className={lastTimeActive === "Active" ? "active" : ""}
        />
        <MoreHorizIcon />
      </ListItem>
    </div>
  );
};

export default Contact;