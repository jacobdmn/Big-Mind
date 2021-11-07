import React, { useRef, useState } from "react";
///// Import icons and components
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import PersonIcon from "@mui/icons-material/Person";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import { TextareaAutosize } from "@mui/material";
import { TextField } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Popper from "@mui/material/Popper";
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state";
import Fade from "@mui/material/Fade";
import Paper from "@mui/material/Paper"; //// css file if needed
import "./style/NewScream.css";
import { db } from "./../../../../firebase";
import { addDoc } from "firebase/firestore";
/// import store functions
import { useDispatch, useSelector } from "react-redux";
// import { POST_SCREAM } from "../../../../Redux/reducers/POST_SCREAM";
import { collection } from "@firebase/firestore";

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

const NewScream = (props: any) => {
  const currentUser = useSelector((state: any) => state.currentUserReducer);
  // const [loadingCurrentUser, setLoadingCurrentUser] = useState(true);
  // const dispatch = useDispatch();
  const screamTextAreaRef = useRef<HTMLTextAreaElement>(null!);
  const screamLocationAreaRef = useRef<HTMLTextAreaElement>(null);
  const screamImageAreaRef = useRef<HTMLTextAreaElement>(null);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postLength, setPostLength] = useState(0);
  const [reachedLimit, setReachedLimit] = useState(false); ///
  const [showAudiance, setShowAudiance] = useState(false); /// show/hide audiance privacy
  const limit = 100; /// num of charachters allowed per scream

  const dispatchPostToFirebase = async (content: {
    text: string;
    img?: string;
    location?: string;
  }) => {
    const screamsCollection = collection(db, "screams");

    try {
      await addDoc(screamsCollection, {
        owner: {
          id: currentUser.userId,
          avatar: currentUser.userAvatar,
        },
        content: content,
        createdAt: `${month[new Date().getMonth()]}
         ${new Date().getDay()}, ${new Date().getHours()}:${new Date().getMinutes()}`,
      });
    } catch (error) {
      console.error(error);
    }
  };
  const handlePost = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (screamTextAreaRef.current.value === "" || reachedLimit) return;
    setLoadingPost(true);
    setTimeout(() => {
      screamTextAreaRef.current.value = screamTextAreaRef.current.value
        .replace(/ {2}/g, "  ")
        .replaceAll(/\n/g, " &#10 ");

      dispatchPostToFirebase({
        text: screamTextAreaRef.current.value,
        // img: screamTextAreaRef.current.value,
        location: screamLocationAreaRef.current?.value,
      });

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
            <label htmlFor='addImg' style={{ margin: 0, paddingTop: "2px" }}>
              <PhotoCamera />
            </label>
            <input
              className='Icons__addImg'
              disabled={loadingPost}
              type='file'
              accept='image'
              id='addImg'
              style={{ display: "none" }}
            />
            <PopupState variant='popper' popupId='demo-popup-popper'>
              {(popupState) => (
                <div>
                  <Button
                    {...bindToggle(popupState)}
                    className='Icons__addLocation'
                    disabled={loadingPost}
                    sx={{
                      minWidth: "unset",
                      padding: 0,
                    }}>
                    <AddLocationAltIcon />
                  </Button>
                  <Popper {...bindPopper(popupState)} transition>
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                          <Typography sx={{ p: 2 }}>
                            <TextField
                              id='standard-search'
                              label='where ?'
                              type='search'
                              variant='standard'
                              inputRef={screamLocationAreaRef}
                            />
                          </Typography>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                </div>
              )}
            </PopupState>
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
