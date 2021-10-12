import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

const Invit: React.FC<{ fullName: string; userAvatar: string }> = ({
  fullName,
  userAvatar,
}) => {
  return (
    <div className='InvitationDiv'>
      <div className='InvitationInfo'>
        <Avatar src={userAvatar} />
        <div>
          <span className='fullName'>{fullName} </span>
          wants to add you to friends
        </div>
      </div>
      <div className='InvitationOptions'>
        <Button variant='contained'>Accept</Button>
        <Button variant='outlined'>Decline</Button>
      </div>
    </div>
  );
};
export default Invit;
