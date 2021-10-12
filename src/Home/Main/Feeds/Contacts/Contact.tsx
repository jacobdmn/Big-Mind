import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

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
        <ListItemText primary={fullName} secondary={lastTimeActive} />
      </ListItem>
    </div>
  );
};

export default Contact;
