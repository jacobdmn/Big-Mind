import { createStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/ACCEPT_FRIENDSHIP_INVITATION";

const store = createStore(reducer);

export default store;
