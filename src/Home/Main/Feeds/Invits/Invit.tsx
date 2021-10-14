import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { handleLoadingAnimation } from "./../../../Home";

const Invit: React.FC<{
  fullName: string;
  userAvatar: string;
  filterInvitations: (fullNameFilter: string) => void;
}> = ({ fullName, userAvatar, filterInvitations }) => {
  const [loadingRequest, setLoadingRequest] = React.useState(false);
  const [acceptButtonContent, setAcceptButtonContent] = React.useState({
    label: "ACCEPT",
    icon: <></>,
  });
  const [declineButtonContent, setDeclineButtonContent] = React.useState({
    label: "DECLINE",
    icon: <></>,
  });

  /// Handle accpeting action
  function handleAccept() {
    const handleAcceptFunc = new handleLoadingAnimation(
      setLoadingRequest,
      acceptButtonContent,
      setAcceptButtonContent
    );
    handleAcceptFunc.setLoadingFunc();
    setTimeout(() => {
      handleAcceptFunc.setDoneFunc();
      filterInvitations(fullName);
    }, 1000);
  }

  /// Handle declining action
  function handleDecline() {
    const handleDeclineFunc = new handleLoadingAnimation(
      setLoadingRequest,
      declineButtonContent,
      setDeclineButtonContent
    );
    handleDeclineFunc.setLoadingFunc();
    setTimeout(() => {
      handleDeclineFunc.setDoneFunc();
      filterInvitations(fullName);
    }, 1000);
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
