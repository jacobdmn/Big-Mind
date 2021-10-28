import React, { useRef } from "react";
import "./css/login.css";
import Checkbox from "@mui/material/Checkbox";

import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";

const Login = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);

  const Banner =
    "https://cmapp-prod.azureedge.net/assets/resources/5c3798b8410f47f4aa734ff5ecb37437-love.jpg?width=800";
  return (
    <>
      <div
        className='Login__Form'
        style={{ backgroundImage: `url(${Banner})` }}>
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
          <div className='formBox'>
            <h1 className='title'>Login to continue</h1>
            <div className='formApp'>
              <div className='email input'>
                <TextField
                  id='emailInput'
                  label='Email'
                  variant='outlined'
                  inputRef={refInput}
                  sx={{
                    "&, &> *": {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>

              <div className='password input'>
                <TextField
                  id='passwordInput'
                  label='Password'
                  variant='outlined'
                  type='password'
                  inputRef={refInputPassword}
                  sx={{
                    "&, &> *": {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
              <div className='rememberMe'>
                <Checkbox className='rememberMeInput' id='rememberMeInput' />
                <label className='rememberMeLabel' htmlFor='rememberMeInput'>
                  Remember me
                </label>
              </div>

              <div className='submitButton'>
                <button>LOGIN</button>
              </div>

              <div className='Options'>
                <h3 className='options2Title'> Create an account </h3>
                <h3 className='options2Title'> or sign up using </h3>

                <div className='Options__Buttons'>
                  <button className='google'>
                    <GoogleIcon />
                  </button>

                  <button className='facebook'>
                    <FacebookIcon />
                  </button>

                  <button className='twitter'>
                    <TwitterIcon />
                  </button>
                </div>

                <div className='forgotPassword'>
                  <button> Forgot Password? </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <h5>Powered By Jacob</h5>
        </footer>
      </div>
    </>
  );
};

export default Login;
