import actionTypes from "../actionTypes";
import { USER_INVITATIONS } from "./../database";
import { USER_FRIENDS } from "./../database";

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

interface actionTypeScript {
  type: string;
  payload: {
    id: number;
    userInvitations: number[];
  };
}

const friendshipReducer = (
  state = [...USER_FRIENDS],
  action: actionTypeScript
) => {
  /// IF USER:> Accepts =====> NewUser =>  USER_FRIENDS
  action.type === actionTypes.ACCEPT_FRIENDSHIP_INVITATION &&
    state.push(action.payload.id);

  return [...state];

  //   add this later: userInvitations.filter((id) => id !== action.payload.id);
};
export default friendshipReducer;
