import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Main from "./Main/Main";
import "./css/Home.css";

const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='body'>
        <NavBar />
        <Main />
      </div>
    </div>
  );
};

export default Home;
