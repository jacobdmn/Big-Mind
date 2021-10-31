import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./../../firebase";
import actionTypes from "../actionTypes";

export const SIGN_UP_ACTION = (
  fullName: string,
  email: string,
  password: string
) => {
  return {
    type: actionTypes.SIGNUP,
    payload: {
      fullName: fullName,
      email: email,
      password: password,
    },
  };
};
const initialState = {
  /// get users db
  /// Chill, no need !
  x: 1,
};

const SIGNUP_REDUCER = (
  state = initialState,
  action: {
    type: string;
    payload: { fullName: string; email: string; password: string };
  }
) => {
  switch (action.type) {
    case actionTypes.SIGNUP:
      try {
        createUserWithEmailAndPassword(
          auth,
          action.payload.email,
          action.payload.password
        ).then((credential) => {
          console.log(credential);
        });
      } catch (error) {
        console.error(error);
      }
      break;
  }
  return null;
};

export default SIGNUP_REDUCER;
