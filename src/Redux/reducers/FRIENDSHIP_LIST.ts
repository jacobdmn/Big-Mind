import actionTypes from "../actionTypes";
import { USER_FRIENDS } from "../database";
import { USER_INVITATIONS } from "../database";
////////////////////////////////////////////////////////////////
export const ACCEPT_FRIENDSHIP_INVITATION_ACTION = (id: number) => {
  return {
    type: actionTypes.ACCEPT_FRIENDSHIP_INVITATION_TYPE,
    payload: {
      id,
    },
  };
};
////////////////////////////////////////////////////////////////
export const FILTER_INVITATION_LIST = (id: number) => {
  return {
    type: actionTypes.FILTER_INVITATION_LIST,
    payload: {
      id,
    },
  };
};
////////////////////////////////////////////////////////////////
interface actionTypeScript {
  type: string;
  payload: {
    id: number;
  };
}
const initialState = {
  USER_FRIENDS_COPIE: [...new Set(USER_FRIENDS)],
  USER_INVITATIONS_COPIE: [...new Set(USER_INVITATIONS)],
};

const friendshipListReducer = (
  state = initialState,
  action: actionTypeScript
) => {
  switch (action.type) {
    case actionTypes.ACCEPT_FRIENDSHIP_INVITATION_TYPE:
      if (!state.USER_FRIENDS_COPIE.includes(action.payload.id))
        state.USER_FRIENDS_COPIE.push(action.payload.id);
      break;
    case actionTypes.FILTER_INVITATION_LIST:
      state.USER_INVITATIONS_COPIE = [
        ...state.USER_INVITATIONS_COPIE.filter(
          (invitID) => invitID !== action.payload.id
        ),
      ];
      break;
  }
  return { ...state };
};
export default friendshipListReducer;
