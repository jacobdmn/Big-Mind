import { SCREAMS } from "./../database";

interface actionTypeScript {
  type: string;
  payload: {
    screamId: number;
    screamContent: {
      text: string;
      img: string;
    };
    userId: number;
  };
}

export const reducer = (state = SCREAMS, action: actionTypeScript) =>
  state.push(action.payload);
