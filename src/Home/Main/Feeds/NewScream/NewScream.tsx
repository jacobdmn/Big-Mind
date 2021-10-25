import React, { useRef, useState } from "react";
import { styled } from "@mui/material/styles";
///// Import styled components
import { StyledForm, StyledInput } from "./style/styles";
import { StyledAvatar, StyledButton } from "./../../../style/styledComponents";
//// import a text field
import TextField from "@mui/material/TextField";
///// Import icons
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
//// css file if needed
import "./style/NewScream.css";
///// import functions
import { handleLoadingAnimation } from "./../../../Home";
/// import store functions
import { useDispatch, useSelector } from "react-redux";
import { POST_SCREAM } from "./../../../../Redux/reducers/POST_SCREAM";
const TextFieldStyled = styled(TextField)({
  "& *": {
    boxSizing: "content-box !important",
  },
});
const NewScream = (props: any) => {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);
  const dispatch = useDispatch();
  const screamInputRef = useRef<HTMLInputElement>(null!);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postButtonContent, setPostButtonContent] = useState({
    label: "POST",
    icon: <SendIcon />,
  });

  const handlePost = (
    postContent: React.MutableRefObject<HTMLInputElement>,
    setLoadingPost: React.Dispatch<React.SetStateAction<boolean>>,
    postButtonContent: {
      label: string;
      icon: JSX.Element;
    },
    setPostButtonContent: React.Dispatch<
      React.SetStateAction<{
        label: string;
        icon: JSX.Element;
      }>
    >
  ) => {
    const handlePostClass = new handleLoadingAnimation(
      setLoadingPost,
      postButtonContent,
      setPostButtonContent
    );
    if (postContent?.current.value) {
      handlePostClass.setLoadingFunc();
      dispatch(POST_SCREAM({ text: postContent.current.value }));
      setTimeout(() => {
        postContent.current.value = "";
        handlePostClass.setDoneFunc();
      }, 400);
    }
  };
  return (
    <div className='NewScream'>
      <StyledForm
        noValidate
        autoComplete='off'
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          handlePost(
            screamInputRef,
            setLoadingPost,
            postButtonContent,
            setPostButtonContent
          );
        }}>
        <StyledAvatar src={CURRENT_USER.userAvatar} />
        <TextFieldStyled
          id='outlined-search'
          label={`What's new ${CURRENT_USER.fullName.split(" ")[0]}?`}
          type='text'
          disabled={loadingPost}
          inputRef={screamInputRef}
          multiline
        />
        <label htmlFor='icon-button-file' style={{ margin: 0 }}>
          <StyledInput accept='image/*' id='icon-button-file' type='file' />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
            style={{ marginInline: ".5em" }}
            disabled={loadingPost}>
            <PhotoCamera />
          </IconButton>
        </label>
        <StyledButton
          onClick={(e: React.SyntheticEvent) => {
            e.preventDefault();
            handlePost(
              screamInputRef,
              setLoadingPost,
              postButtonContent,
              setPostButtonContent
            );
          }}
          endIcon={postButtonContent.icon}
          disabled={loadingPost}
          sxPlus={{ width: "8em", paddingBlock: ".6em" }}>
          {postButtonContent.label}
        </StyledButton>
      </StyledForm>
    </div>
  );
};

export default NewScream;
