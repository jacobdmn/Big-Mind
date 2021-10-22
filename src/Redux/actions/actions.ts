import actionTypes from "../actionTypes/actionTypes";
import { USER_INVITATIONS } from "./../database";
////////////////////////////////////////////////////////////////
import { SCREAMS } from "./../database";
import { SCREAM } from "./../database";
let lastIdScream = SCREAMS.length - 1;
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

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
  userId: number,
  screamContent: { text: string; img?: "" },
  location?: string
) => {
  return {
    type: actionTypes.POST_SCREAM,
    payload: {
      newScream: new SCREAM(
        parseInt(`${Date.now() + lastIdScream++}`), /// scream id
        userId, /// user id
        screamContent,
        `${
          month[new Date().getMonth()]
        } ${new Date().getDay()} at ${new Date().getHours()}:${new Date().getMinutes()}`, /// created at
        location
      ), //// scream content
    },
  };
};
////////////////////////////////////////////////////////////////
