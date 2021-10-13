import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { handleLoadingAnimation } from "./../../../Home";

const Invit: React.FC<{ fullName: string; userAvatar: string }> = ({
  fullName,
  userAvatar,
}) => {
  const [loadingRequest, setLoadingRequest] = React.useState(false);
  const [acceptButtonContent, setAcceptButtonContent] = React.useState({
    label: "ACCEPT",
    icon: <></>,
  });
  const [declineButtonContent, setDeclineButtonContent] = React.useState({
    label: "DECLINE",
    icon: <></>,
  });

  function handleAccept() {
    handleLoadingAnimation(
      setLoadingRequest,
      acceptButtonContent,
      setAcceptButtonContent
    );
  }
  function handleDecline() {
    handleLoadingAnimation(
      setLoadingRequest,
      declineButtonContent,
      setDeclineButtonContent
    );
  }
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
        <Button
          variant='contained'
          disabled={loadingRequest}
          endIcon={acceptButtonContent.icon}
          onClick={handleAccept}>
          {acceptButtonContent.label}
        </Button>
        <Button
          variant='outlined'
          disabled={loadingRequest}
          endIcon={declineButtonContent.icon}
          onClick={handleDecline}>
          {declineButtonContent.label}
        </Button>
      </div>
    </div>
  );
};
export default Invit;
