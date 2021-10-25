import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Story from "./Story";
import "./css/Stories.css";
import { styled } from "@mui/material/styles";
import ShowFullScreen from "./ShowFullScreen";
import { useSelector /* useDispatch */ } from "react-redux";

const Stories = () => {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);
  const users = useSelector((state: any) => state.usersReducer);
  const stories = useSelector((state: any) => state.storiesReducer);

  stories.forEach((story: any) => {
    /// create userInfos to map userId to userInfos [full profile]
    story.userInfos = users.find((user: any) => user.userId === story.userId);
  });
  const StyledUploadInput = styled("input")({
    position: "absolute",
    top: "-100%",
    left: "0",
    width: "100%",
    height: "200%",
    opacity: 0,
    cursor: "pointer",
  });

  const [open, setOpen] = React.useState(false);
  const [storyID, setStoryID] = React.useState(0);

  const getStoryId = (id: number) => {
    setStoryID(id);
    setOpen(true);
  };

  return (
    <div className='Stories'>
      <div
        className='Story'
        style={{
          backgroundImage: `url('${CURRENT_USER.userAvatar}')`,
        }}>
        <div className='add'>
          <AddIcon />
        </div>
        <h4 className='Story-title'>Add Story</h4>
        <StyledUploadInput type='file' accept='image' />
      </div>

      {stories.length > 0 &&
        stories.map((STORY: any) => (
          <Story
            key={STORY.storyId}
            {...STORY}
            handleClick={() => getStoryId(STORY.storyId)}
          />
        ))}

      {/*  */}
      {open && (
        <ShowFullScreen
          stories={stories}
          id={storyID}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
};

export default Stories;
