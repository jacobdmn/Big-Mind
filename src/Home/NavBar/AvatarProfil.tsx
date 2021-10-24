import * as React from "react";
import { StyledAvatar } from "./../style/styledComponents";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";

export default function AvatarProfil() {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);

  return (
    <>
      <StyledAvatar src={CURRENT_USER.userAvatar} />
      <div className='Name'>
        <h4>{CURRENT_USER.fullName}</h4>
        <h5>@{CURRENT_USER.userName}</h5>
      </div>
      <div>
        <SettingsIcon className='Setting' />
      </div>
    </>
  );
}
