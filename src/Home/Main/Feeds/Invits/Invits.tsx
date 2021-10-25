import React from "react";

import "./css/Invits.css";
import Invit from "./Invit";
import { useSelector, useDispatch } from "react-redux";

const Invits = () => {
  const users = useSelector((state: any) => state.usersReducer);
  const invits = useSelector(
    (state: any) => state.friendshipListReducer.USER_INVITATIONS_COPIE
  ).map((invitID: number) =>
    users.find((user: any) => user.userId === invitID)
  );
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = React.useState(true);

  /// Accept function
  const handleAccept = (userId: number) => {
    dispatch({
      type: "ACCEPT_FRIENDSHIP_INVITATION_TYPE",
      payload: { id: userId },
    });
    filterInvitationListFunc(userId);
  };

  /// Filter function
  const filterInvitationListFunc = (userId: number) => {
    dispatch({
      type: "FILTER_INVITATION_LIST",
      payload: { id: userId },
    });
  };

  React.useEffect(() => {}, []);
  return (
    <>
      {invits?.length > 0 && (
        <>
          <div className='Invits-Container'>
            <div className='Invits'>
              {invits.map((currentInvit: any) => (
                <Invit
                  key={currentInvit.userId}
                  {...currentInvit}
                  handleAcceptFromParent={() =>
                    handleAccept(currentInvit.userId)
                  }
                  handleDeclineFromParent={() =>
                    filterInvitationListFunc(currentInvit.userId)
                  }
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Invits;
