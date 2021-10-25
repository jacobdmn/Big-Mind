import { combineReducers } from "redux";

import friendshipListReducer from "./FRIENDSHIP_LIST";
import screamingReducer from "./POST_SCREAM";
import currentUserReducer from "./CURRENT_USER";
import usersReducer from "./USERS";
import userFriendsReducer from "./USER_FRIENDS";
import storiesReducer from "./POST_STORY";
import userMessagesReducer from "./USER_MESSAGES";

const allReducers = combineReducers({
  usersReducer,
  friendshipListReducer,
  screamingReducer,
  currentUserReducer,
  userFriendsReducer,
  storiesReducer,
  userMessagesReducer,
});

export default allReducers;
