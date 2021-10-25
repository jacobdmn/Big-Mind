import { USER_MESSAGES } from "./../database";
// import actionTypes from "../actionTypes";

const initialState = {
  USER_MESSAGES,
};
const userMessagesReducer = (state = initialState, action: any) => {
  return { ...state };
};

export default userMessagesReducer;
