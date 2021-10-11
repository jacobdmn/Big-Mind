import React from "react";
import AvatarProfil from "./AvatarProfil";
import Menu from "./Menu";
import "./css/NavBar.css";

const NavBar: React.FC = () => {
  return (
    <div className='NavBar'>
      <div className='ProfileAvatar'>
        <AvatarProfil />
      </div>
      <div>
        <Menu />
      </div>
    </div>
  );
};
export default NavBar;
