import actionTypes from "../actionTypes";
import { SCREAMS } from "./../database";
import { SCREAM } from "./../database";

////////////////////////////////////////////////////////////////
let lastIdScream = SCREAMS.length - 1;
const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const POST_SCREAM = (
  userId: number,
  screamContent: {
    text: string;
    img?: "";
    location?: string;
  }
) => {
  return {
    type: actionTypes.POST_SCREAM,
    payload: {
      newScream: new SCREAM(
        parseInt(`${Date.now() + lastIdScream++}`), /// scream id
        userId, /// user id
        screamContent, //// scream content
        `${month[new Date().getMonth()]}
         ${new Date().getDay()} at ${new Date().getHours()}:${new Date().getMinutes()}` /// created at, expected Output: Ex: Oct 22
      ),
    },
  };
};
////////////////////////////////////////////////////////////////

export interface actionTypeScript {
  type: string;
  payload: {
    newScream: SCREAM;
  };
}

const screamingReducer = (
  state = [...SCREAMS],
  { type, payload }: actionTypeScript
) => {
  /// Conclusion 1: the condition should be added cuz the store gets executed automatically on start
  /// Conclusion 2: the payload should contain the minimum amount of information needed
  type === actionTypes.POST_SCREAM && (state = [payload.newScream, ...state]);

  return [...state];
};

export default screamingReducer;
