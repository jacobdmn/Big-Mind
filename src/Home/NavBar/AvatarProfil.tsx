import * as React from "react";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";

export default function AvatarProfil() {
  const data = {
    fullName: "Jacob Dmn",
    username: "jacob.dmn",
    userAvatar: "./imgs/ME_LINKEDIN.jpeg",
  };
  return (
    <>
      <Avatar alt='' src={data.userAvatar} />
      <div className='Name'>
        <h4 style={{ cursor: "pointer" }}>{data.fullName}</h4>
        <h5 style={{ cursor: "pointer" }}>@{data.username}</h5>
      </div>
      <div>
        <SettingsIcon className='Setting' />
      </div>
    </>
  );
}
