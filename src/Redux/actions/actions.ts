import actionTypes from "../actionTypes/actionTypes";
import { USER_INVITATIONS } from "./../database";
import { SCREAMS } from "./../database";

let lastIdScream = SCREAMS.length;
////////////////////////////////////////////////////////////////
export const ACCEPT_FRIENDSHIP_INVITATION = (INVIT_ID: number) => {
  return {
    type: actionTypes.ACCEPT_FRIENDSHIP_INVITATION,
    payload: {
      id: INVIT_ID,
      userInvitations: [...USER_INVITATIONS],
    },
  };
};
////////////////////////////////////////////////////////////////
export const POST_SCREAM = (
  screamContent: { text: string; img: "" },
  userId: number
) => {
  return {
    type: actionTypes.POST_SCREAM,
    payload: {
      screamId: lastIdScream++,
      screamContent: screamContent,
      userId: userId,
    },
  };
};
////////////////////////////////////////////////////////////////
