import React, { useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

const Login = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);

  return (
    <div className='Login__formBox'>
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
          <h3 className='options2Title'>
            <Link to=''> Create an account </Link>
          </h3>
          <h3 className='options2Title'>or sign up using</h3>

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
            <Link to=''> Forgot Password? </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
