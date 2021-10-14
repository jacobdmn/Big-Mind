import React from "react";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import "./css/NewScream.css";
import { styled } from "@mui/material/styles";
import { handleLoadingAnimation } from "./../../../Home";
const Input = styled("input")({
  display: "none",
});

const NewScream = () => {
  const data = { fullName: "Jacob Dmn", userAvatar: "./imgs/ME_LINKEDIN.jpeg" };

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
      <Box
        component='form'
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete='off'>
        <Avatar alt='' src={data.userAvatar} />
        <TextField
          id='outlined-search'
          label={`What's new ${data.fullName.split(" ")[0]}?`}
          type='search'
          disabled={loadingPost}
        />
        <label htmlFor='icon-button-file'>
          <Input accept='image/*' id='icon-button-file' type='file' />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
            style={{ marginInline: ".5em" }}
            disabled={loadingPost}>
            <PhotoCamera />
          </IconButton>
        </label>
        <Button
          variant='contained'
          onClick={handlePost}
          endIcon={postButtonContent.icon}
          disabled={loadingPost}>
          {postButtonContent.label}
        </Button>
      </Box>
    </div>
  );
};

export default NewScream;
