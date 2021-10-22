import * as React from "react";
import { StyledAvatar } from "./../style/styledComponents";
import SettingsIcon from "@mui/icons-material/Settings";

export default function AvatarProfil() {
  const data = {
    fullName: "Jacob Dmn",
    username: "jacob.dmn",
    userAvatar: "./imgs/users/jacob_dmn/avatar/jacob_dmn.jpeg",
  };
  return (
    <>
      <StyledAvatar src={data.userAvatar} />
      <div className='Name'>
        <h4>{data.fullName}</h4>
        <h5>@{data.username}</h5>
      </div>
      <div>
        <SettingsIcon className='Setting' />
      </div>
    </>
  );
}
