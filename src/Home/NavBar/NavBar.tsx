import React from "react";
import Avatar from "@mui/material/Avatar";
import SettingsIcon from "@mui/icons-material/Settings";
import Menu from "./Menu";

const NavBar: React.FC = () => {
  return (
    <div className='NavBar'>
      <div className='ProfileAvatar'>
        <Avatar alt='Remy Sharp' src='./imgs/ME_LINKEDIN.jpeg' />
        <div className='Name'>
          <h4>Jacob Dmn</h4>
          <h5>@jacob.dmn</h5>
        </div>
        <div>
          <SettingsIcon className='Setting' />
        </div>
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
export default NavBar;
