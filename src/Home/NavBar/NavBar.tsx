import React from "react";
import AvatarProfil from "./AvatarProfil";
import Menu from "./Menu";
import "./css/NavBar.css";
import Music from "./Music";
const NavBar: React.FC = () => {
  return (
    <div className='NavBar'>
      <div className='ProfileAvatar'>
        <AvatarProfil />
      </div>
      <div>
        <Menu />
      </div>
      {/* <div className='Music'>
        <Music />
      </div> */}
    </div>
  );
};
export default NavBar;
