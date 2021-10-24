import React from "react";
import { StyledButton, StyledAvatar } from "./../../../style/styledComponents";
import { handleLoadingAnimation } from "./../../../Home";
const Invit: React.FC<{
  fullName: string;
  userAvatar: string;
  handleAcceptFromParent: () => {};
  handleDeclineFromParent: () => {};
}> = ({
  fullName,
  userAvatar,
  handleAcceptFromParent,
  handleDeclineFromParent,
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

  /// Handle accpeting action
  function handleAccept() {
    const handleAcceptFunc = new handleLoadingAnimation(
      setLoadingRequest,
      acceptButtonContent,
      setAcceptButtonContent
    );
    handleAcceptFunc.setLoadingFunc();
    setTimeout(() => {
      handleAcceptFromParent();
      handleAcceptFunc.setDoneFunc();
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
      handleDeclineFromParent();
      handleDeclineFunc.setDoneFunc();
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
    </div>
  );
};
export default Invit;
