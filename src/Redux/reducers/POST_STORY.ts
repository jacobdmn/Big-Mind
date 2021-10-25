import actionTypes from "../actionTypes";
import { STORIES } from "../database";
import { STORY } from "../database";
import { CURRENT_USER } from "../database";

let lastStoryID = 0;
export const POST_STORY_ACTION = (storySrc: string) => {
  return {
    type: actionTypes.POST_STORY,
    payload: {
      newStory: new STORY(
        parseInt(`${Date.now() + lastStoryID++}`), /// scream id
        storySrc, //// scream content
        CURRENT_USER.userId /// user id
      ),
    },
  };
};
////////////////////////////////////////////////////////////////

export interface actionTypeScript {
  type: string;
  payload: {
    newStory: STORY;
  };
}

const storiesReducer = (
  state = [...STORIES],
  { type, payload }: actionTypeScript
) => {
  type === actionTypes.POST_STORY && (state = [payload.newStory, ...state]);

  return [...state];
};

export default storiesReducer;
