import React, { useRef, useState } from "react";
///// Import icons and components
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import TextareaAutosize from "react-textarea-autosize";
import PublicIcon from "@mui/icons-material/Public";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
//// css file if needed
import "./style/NewScream.css";

/// import store functions
import { useDispatch, useSelector } from "react-redux";
import { POST_SCREAM } from "../../../../Redux/reducers/POST_SCREAM";

const NewScream = (props: any) => {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);
  const dispatch = useDispatch();
  const screamTextAreaRef = useRef<HTMLTextAreaElement>(null!);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postLength, setPostLength] = useState(0);
  const [reachedLimit, setReachedLimit] = useState(false); ///
  const [showAudiance, setShowAudiance] = useState(false); /// show/hide audiance privacy
  const limit = 100; /// num of charachters allowed per scream

  const handlePost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (screamTextAreaRef.current.value === "" || reachedLimit) return;
    setLoadingPost(true);
    setTimeout(() => {
      screamTextAreaRef.current.value = screamTextAreaRef.current.value
        .replace(/ {2}/g, "  ")
        .replaceAll(/\n/g, " &#10 ");

      console.log(screamTextAreaRef.current.value);

      dispatch(
        POST_SCREAM(CURRENT_USER.userId, {
          text: screamTextAreaRef.current.value,
        })
      );
      screamTextAreaRef.current.value = "";
      setPostLength(0);
      setLoadingPost(false);
    }, 400);
  };
  return (
    <form noValidate autoComplete='off' onSubmit={handlePost}>
      <div
        className='NewScream'
        onMouseEnter={() => setShowAudiance(true)}
        onMouseLeave={() => setShowAudiance(false)}>
        <div className='NewScream__Input'>
          <TextareaAutosize
            ref={screamTextAreaRef}
            disabled={loadingPost}
            placeholder="What's happening?"
            minRows={2}
            onChange={() => {
              setPostLength(screamTextAreaRef.current.value.length);
              postLength > limit
                ? setReachedLimit(true)
                : setReachedLimit(false);
            }}
          />
        </div>
        <div
          className='NewScream__Audiance'
          style={showAudiance ? { opacity: 1 } : {}}>
          <PublicIcon />
          <span>Everyone can reply</span>
        </div>
        <Divider style={{ marginBottom: "1em" }} />
        <div className='NewScream__Options'>
          <div className='Options__Icons'>
            <button className='Icons__addImg' disabled={loadingPost}>
              <PhotoCamera />
            </button>
            <button className='Icons__addLocation' disabled={loadingPost}>
              <AddLocationAltIcon />
            </button>
            <button className='Icons__addEmoji' disabled={loadingPost}>
              <EmojiEmotionsIcon />
            </button>
            <button className='Icons__tagPerson' disabled={loadingPost}>
              <PersonIcon />
            </button>
          </div>
          <span className='Options__charsLimit'>
            <CircularProgress
              variant='determinate'
              // postLength > 100 : keep the circle 🌕
              // between 75% to 100%: show progress
              // less than that: do nothing
              value={
                postLength >= 100
                  ? 100
                  : postLength > limit / 1.5
                  ? (limit * postLength) / 100
                  : 0
              }
              color={postLength >= 100 ? "warning" : "secondary"}
            />
          </span>
          <button
            className='Options__Tweet'
            type='submit'
            disabled={loadingPost || reachedLimit}>
            POST
          </button>
        </div>
      </div>
    </form>
  );
};

export default NewScream;
