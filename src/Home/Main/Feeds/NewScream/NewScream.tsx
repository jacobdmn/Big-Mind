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
import store from "./../../../../Redux/store";
import { CURRENT_USER } from "./../../../../Redux/database";
import { POST_SCREAM } from "./../../../../Redux/reducers/POST_SCREAM";
import { connect } from "react-redux";

const TextFieldStyled = styled(TextField)({
  "& *": {
    boxSizing: "content-box !important",
  },
});
const NewScream = (props: any) => {
  const screamInputRef = useRef<HTMLInputElement>(null!);
  const [loadingPost, setLoadingPost] = useState(false);
  const [postButtonContent, setPostButtonContent] = useState({
    label: "POST",
    icon: <SendIcon />,
  });

  return (
    <div className='NewScream'>
      <StyledForm
        noValidate
        autoComplete='off'
        onSubmit={(e: React.SyntheticEvent) => {
          e.preventDefault();
          props.friendshipReducerForProps(
            screamInputRef?.current.value,
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
        <label htmlFor='icon-button-file'>
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
            props.friendshipReducerForProps(
              screamInputRef?.current.value,
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

/// handle post function, keep the loading circle till the useEffect finishes the uploading

const mapDispatchToProps = (dispatch: typeof store.dispatch) => {
  return {
    friendshipReducerForProps: (
      postContent: string | null,
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
      if (postContent) {
        handlePostClass.setLoadingFunc();
        store.dispatch(
          POST_SCREAM(CURRENT_USER.userId, {
            text: postContent,
          })
        );
        setTimeout(() => {
          postContent = "";
          handlePostClass.setDoneFunc();
        }, 400);
      }
    },
  };
};

export default connect(null, mapDispatchToProps)(NewScream);
