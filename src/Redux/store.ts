import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import friendshipReducer from "./reducers/ACCEPT_FRIENDSHIP_INVITATION";
import screamingReducer from "./reducers/POST_SCREAM";

const allReducers = combineReducers({
  friendshipReducer,
  screamingReducer,
});
const store = createStore(allReducers, composeWithDevTools(applyMiddleware()));

export default store;
