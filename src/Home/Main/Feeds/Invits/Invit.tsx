import React from "react";
import { StyledButton, StyledAvatar } from "./../../../style/styledComponents";
import { handleLoadingAnimation } from "./../../../Home";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

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
        <StyledAvatar src={userAvatar} />
        <div>
          <span className='fullName'>{fullName} </span>
          wants to add you to friends
        </div>
      </div>
      <div className='InvitationOptions'>
        <StyledButton
          variant='contained'
          disabled={loadingRequest}
          endIcon={acceptButtonContent.icon}
          onClick={handleAccept}
          sxPlus={{
            width: "calc(min(55%, 10em))",
          }}>
          {acceptButtonContent.label}
        </StyledButton>
        <StyledButton
          variant='outlined'
          disabled={loadingRequest}
          endIcon={declineButtonContent.icon}
          onClick={handleDecline}
          sxPlus={{
            width: "calc(min(45%, 8em))",
            padding: "0.4em 2em !important",
          }}>
          {declineButtonContent.label}
        </StyledButton>
      </div>
      <span className='closeIcon'>
        <HighlightOffIcon onClick={() => filterInvitations(fullName)} />
      </span>
    </div>
  );
};
export default Invit;
