import { combineReducers } from "redux";

import friendshipListReducer from "./FRIENDSHIP_LIST";
import screamingReducer from "./POST_SCREAM";
import currentUserReducer from "./CURRENT_USER";
import usersReducer from "./USERS";
import userFriendsReducer from "./USER_FRIENDS";

const allReducers = combineReducers({
  usersReducer,
  friendshipListReducer,
  screamingReducer,
  currentUserReducer,
  userFriendsReducer,
});

export default allReducers;
