import React from "react";

import "./css/Invits.css";
import Invit from "./Invit";
import { useSelector, useDispatch } from "react-redux";

const Invits = () => {
  const invits = useSelector(
    (state: any) => state.friendshipListReducer.USER_INVITATIONS_COPIE
  );
  const users = useSelector((state: any) => state.usersReducer);
  const dispatch = useDispatch();

  const handleAccept = (userId: number) => {
    dispatch({
      type: "ACCEPT_FRIENDSHIP_INVITATION_TYPE",
      payload: { id: userId },
    });
    dispatch({
      type: "FILTER_INVITATION_LIST",
      payload: { id: userId },
    });
  };
  const handleDecline = (userId: number) => {
    dispatch({
      type: "FILTER_INVITATION_LIST",
      payload: { id: userId },
    });
  };

  return (
    <>
      {invits?.length > 0 && (
        <>
          <div className='Invits-Container'>
            <div className='Invits'>
              {invits.map((invitID: number) => {
                const currentInvit = users.find(
                  (user: any) => user.userId === invitID
                );
                return (
                  <Invit
                    key={currentInvit.userId}
                    {...currentInvit}
                    handleAcceptFromParent={() =>
                      handleAccept(currentInvit.userId)
                    }
                    handleDeclineFromParent={() =>
                      handleDecline(currentInvit.userId)
                    }
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Invits;
