import React from "react";
import "./css/login.css";
import Login from "./Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Log = () => {
  const Banner =
    "https://cmapp-prod.azureedge.net/assets/resources/5c3798b8410f47f4aa734ff5ecb37437-love.jpg?width=800";
  return (
    <>
      <div className='Log__Form' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='container'>
          <div className='Banner'>
            <img
              className='logo'
              src='./imgs/_bigmid_files_/logo/logo_high_quality.png'
              alt=''
            />
            <h1>Big Mind</h1>
            <h2>Where Smart People Meet !</h2>
          </div>
          <Switch></Switch>
        </div>
        <footer>
          <h5>Powered By Jacob</h5>
        </footer>
      </div>
    </>
  );
};

export default Log;
