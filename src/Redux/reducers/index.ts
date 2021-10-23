import { combineReducers } from "redux";

import friendshipReducer from "./ACCEPT_FRIENDSHIP_INVITATION";
import screamingReducer from "./POST_SCREAM";

const allReducers = combineReducers({
  friendshipReducer,
  screamingReducer,
});

export default allReducers;
