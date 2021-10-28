import * as React from "react";
import { StyledAvatar } from "./../style/styledComponents";
import SettingsIcon from "@mui/icons-material/Settings";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function AvatarProfil() {
  const CURRENT_USER = useSelector((state: any) => state.currentUserReducer);

  return (
    <>
      <Link to='/Profile'>
        <StyledAvatar src={CURRENT_USER.userAvatar} />
      </Link>
      <Link to='/Profile'>
        <div className='Name'>
          <h4>{CURRENT_USER.fullName}</h4>
          <h5>@{CURRENT_USER.userName}</h5>
        </div>
      </Link>

      <div>
        <Link to='/Settings'>
          <SettingsIcon className='Setting' />
        </Link>
      </div>
    </>
  );
}
