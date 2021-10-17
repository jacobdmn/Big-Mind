import React from "react";
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

const TextFieldStyled = styled(TextField)({
  "& *": {
    boxSizing: "content-box !important",
  },
});
const NewScream = () => {
  const data = {
    fullName: "Jacob Dmn",
    userAvatar: "./imgs/users/jacob_dmn/avatar/jacob_dmn.jpeg",
  };

  const [loadingPost, setLoadingPost] = React.useState(false);
  const [postButtonContent, setPostButtonContent] = React.useState({
    label: "POST",
    icon: <SendIcon />,
  });

  function handlePost() {
    const handlePostClass = new handleLoadingAnimation(
      setLoadingPost,
      postButtonContent,
      setPostButtonContent
    );
    handlePostClass.setLoadingFunc();
    setTimeout(() => handlePostClass.setDoneFunc(), 1000);
  }

  return (
    <div className='NewScream'>
      <StyledForm noValidate autoComplete='off'>
        <StyledAvatar src={data.userAvatar} />
        <TextFieldStyled
          id='outlined-search'
          label={`What's new ${data.fullName.split(" ")[0]}?`}
          type='search'
          disabled={loadingPost}
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
          onClick={handlePost}
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
