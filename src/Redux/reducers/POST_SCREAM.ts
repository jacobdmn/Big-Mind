import actionTypes from "../actionTypes/actionTypes";
import { SCREAMS } from "./../database";
import { SCREAM } from "./../database";

export interface actionTypeScript {
  type: string;
  payload: {
    newScream: SCREAM;
  };
}

export const reducer = (
  state = SCREAMS,
  { type, payload }: actionTypeScript
) => {
  /// Conclusion: the condition should be added cuz the function get executed automatically on start
  type === actionTypes.POST_SCREAM && (state = [...state, payload.newScream]);

  return state;
};
