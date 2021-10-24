import { CURRENT_USER } from "./../database";
import actionTypes from "./../actionTypes";

const currentUserReducer = (state = CURRENT_USER, action: any) => {
  return state;
};

export default currentUserReducer;

/// new reducer is gonna be called Logged reducer
//  and it will hold the information about theuser
