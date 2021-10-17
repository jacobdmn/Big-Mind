import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Story from "./Story";
import "./css/Stories.css";
import { styled } from "@mui/material/styles";
import ShowFullScreen from "./ShowFullScreen";

const Stories = () => {
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
          backgroundImage: `url('${data[1].story}')`,
        }}>
        <div className='add'>
          <AddIcon />
        </div>
        <h4 className='Story-title'>Add Story</h4>
        <StyledUploadInput type='file' accept='image' />
      </div>

      {data.map((STORY) => (
        <Story
          key={STORY.id}
          {...STORY}
          handleClick={() => getStoryId(STORY.id)}
        />
      ))}

      {/*  */}
      {open && <ShowFullScreen id={storyID} open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Stories;
