import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./reducers/./";

const store = createStore(allReducers, composeWithDevTools(applyMiddleware()));

export default store;
