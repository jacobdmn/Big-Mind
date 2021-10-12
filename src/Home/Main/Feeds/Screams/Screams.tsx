import React from "react";
import Avatar from "@mui/material/Avatar";
import "./css/Screams.css";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Screams: React.FC = () => {
  const postDate = new Date();
  const data = {
    fullName: "Jacob Dmn",
    userAvatar: "./imgs/ME_LINKEDIN.jpeg",
    location: "Manhattan, NY",
    date: `${postDate.toLocaleString("default", {
      month: "short",
    })} ${postDate.getDay()} at ${postDate.getHours()}:${postDate.getMinutes()}`,
  };
  return (
    <div className='Screams'>
      <div className='Scream'>
        <div className='Scream-title'>
          <Avatar alt='' src={data.userAvatar} />
          <div className='fullName'>
            <h4>{data.fullName}</h4>
            <h5>
              {data.location}, {data.date}
            </h5>
          </div>
        </div>
        <div>
          <MoreHorizIcon />
        </div>
      </div>
    </div>
  );
};
export default Screams;
