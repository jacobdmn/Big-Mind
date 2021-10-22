import actionTypes from "./../actionTypes/actionTypes";
import { USER_INVITATIONS } from "./../database";
import { USER_FRIENDS } from "./../database";

interface actionTypeScript {
  type: string;
  payload: {
    id: number;
    userInvitations: number[];
  };
}

export const reducer = (state = USER_FRIENDS, action: actionTypeScript) => {
  /// IF USER:> Accepts =====> NewUser =>  USER_FRIENDS
  action.type === actionTypes.ACCEPT_FRIENDSHIP_INVITATION &&
    state.push(action.payload.id);

  return state;

  //   add this later: userInvitations.filter((id) => id !== action.payload.id);
};
