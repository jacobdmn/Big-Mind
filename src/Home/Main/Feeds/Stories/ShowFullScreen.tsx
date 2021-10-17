import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { styled } from "@mui/material/styles";
import ChevronLeftSharpIcon from "@mui/icons-material/ChevronLeftSharp";

const ShowFullScreen: React.FC<{
  id: number;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ id, open, setOpen }) => {
  const data = [
    {
      id: 323,
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      id: 3223,
      fullName: "Maria MiMi",
      userAvatar:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
      story:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
    },
    {
      id: 3123,
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      id: 31123,
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      id: 31223,
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      id: 314323,
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
    },
  ];

  ///  this id will change when the user navigate between stories
  const [ID, setID] = React.useState(
    data.indexOf(data.filter((story) => story.id === id)[0])
  );

  //// when the user clicks the arrows
  const changeStory = (type: string) => {
    switch (type) {
      case "previous":
        ID > 0 && setID((ID) => ID - 1);

        break;
      case "next":
        ID < data.length - 1 && setID((ID) => ID + 1);
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
    backgroundColor: "rgba(0,0,0,0.5)",
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
              backgroundImage: `url('${data[ID].story}')`,
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
                backgroundImage: `url('${data[ID].userAvatar}')`,
              }}></div>
            <h4 className='Story-title'>{data[ID].fullName.split(" ")[0]}</h4>
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
