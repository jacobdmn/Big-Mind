import { CURRENT_USER, USER } from "./../database";
import actionTypes from "./../actionTypes";

export const LOGGED_IN = (CURRENT_USER: USER) => {
  return {
    type: actionTypes.LOGGED_IN,
    payload: { CURRENT_USER },
  };
};

const initialState = {
  CURRENT_USER,
};
const currentUserReducer = (state = initialState, action: any) => {
  // action.type === actionTypes.LOGGED_IN &&
  //   (state.CURRENT_USER = action.payload.CURRENT_USER);
  return state;
};

export default currentUserReducer;

/// new reducer is gonna be called Logged reducer
//  and it will hold the information about the user
