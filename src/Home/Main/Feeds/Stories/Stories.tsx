import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Story from "./Story";
import "./css/Stories.css";
const Stories = () => {
  const data = [
    {
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "data:image/jpeg;base64,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",
    },
    {
      fullName: "Maria MiMi",
      userAvatar:
        "data:image/jpeg;base64,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",
      story:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
    },
    {
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
    {
      fullName: "Maria MiMi",
      userAvatar:
        "https://media.gettyimages.com/photos/personality-maria-menounos-attends-the-101st-annual-white-house-at-picture-id471130842?s=612x612",
      story:
        "https://www.packard.org/wp-content/uploads/2019/03/Maria_Tourtchaninova_crop-524x643.jpg",
    },
  ];
  return (
    <div className='Stories'>
      <div
        className='Story'
        style={{ backgroundImage: `url('${data[1].story}')` }}>
        <div className='add'>
          <AddIcon />
        </div>
        <h4 className='Story-title'>Add Story</h4>
      </div>

      {data.map((STORY) => (
        <Story {...STORY} />
      ))}
    </div>
  );
};

export default Stories;
