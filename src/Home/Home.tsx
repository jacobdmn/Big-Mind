import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import Screams from "./Main/Screams/Screams";
import "./css/Home.css";
const Home = () => {
  return (
    <div className='Home'>
      <Header />
      <div className='body'>
        <NavBar />
        <Screams />
      </div>
    </div>
  );
};

export default Home;
