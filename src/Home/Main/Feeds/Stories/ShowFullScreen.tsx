import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";

const ShowFullScreen: React.FC<{
  stories: any;
  id: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ stories, id, open, setOpen }) => {
  ///  this id will change when the user navigate between stories
  const [ID, setID] = React.useState(
    // get the index of story to use it to select later
    stories.indexOf(stories.find((story: any) => story.storyId === id))
  );

  //// when the user clicks the arrows
  const changeStory = (type: string) => {
    switch (type) {
      case "previous":
        ID > 0 && setID((ID: number) => ID - 1);

        break;
      case "next":
        ID < stories.length - 1 && setID((ID: number) => ID + 1);
        break;
      default:
        break;
    }
    return;
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  //// filter div
  const StyledBackdrop = styled("div")({
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.95)",
    zIndex: 1000,
  });

  const StyledChevronLeftSharpIcon = styled(ChevronLeftSharpIcon)({
    position: "absolute",
    top: "50%",
    fontSize: " 3em",
    opacity: 0.5,
    transition: "all .2s ease-in",
    "&:hover": {
      opacity: 1,
    },
  });
  return (
    <div className='FullSecreenStory'>
      {open && (
        <>
          <StyledBackdrop onClick={handleClickAway} />
          <div
            className='Story'
            style={{
              backgroundImage: `url('${stories[ID].storySrc}')`,
              position: "fixed",
              top: "50%",
              left: "50%",
              width: "30%",
              height: "80%",
              zIndex: 1001,
              transform: "translate(-50%, -50%)",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}>
            <div
              className='Avatar-Story'
              style={{
                backgroundImage: `url('${stories[ID].userInfos.userAvatar}')`,
              }}></div>
            <h4 className='Story-title'>
              {stories[ID].userInfos.fullName.split(" ")[0]}
            </h4>
            <StyledChevronLeftSharpIcon
              style={{ left: 0 }}
              onClick={() => changeStory("previous")}
            />
            <StyledChevronLeftSharpIcon
              style={{ right: 0, transform: "rotate(180deg)" }}
              onClick={() => changeStory("next")}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default ShowFullScreen;
