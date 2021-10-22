import { createStore } from "@reduxjs/toolkit";
// import { reducer } from "./reducers/ACCEPT_FRIENDSHIP_INVITATION";
import { reducer } from "./reducers/POST_SCREAM";

const store = createStore(reducer);

export default store;
