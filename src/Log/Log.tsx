import React from "react";
import "./css/login.css";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import TextField from "@mui/material/TextField";

import { Switch, Route } from "react-router-dom";

import { styled } from "@mui/material";
export const StyledTextField = styled(TextField)({
  "&, &> *": {
    width: "100%",
    height: "100%",
  },
});

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
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
            <Route exact path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </div>
        <footer>
          <h5>Powered By Jacob</h5>
        </footer>
      </div>
    </>
  );
};

export default Log;
