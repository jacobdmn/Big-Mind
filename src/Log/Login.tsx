import React, { useRef } from "react";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const Login = ({ submitButtonContent }: { submitButtonContent: String }) => {
  const refInput = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className='title'>Login to continue</h1>
      <div className='email input'>
        <StyledTextField
          id='emailInput'
          label='Email'
          variant='outlined'
          inputRef={refInput}
          autoComplete='on'
        />
      </div>

      <div className='password input'>
        <StyledTextField
          id='passwordInput'
          label='Password'
          variant='outlined'
          type='password'
          autoComplete='on'
          inputRef={refInputPassword}
        />
      </div>

      <div className='rememberMe'>
        <Checkbox className='rememberMeInput' id='rememberMeInput' />
        <label className='rememberMeLabel' htmlFor='rememberMeInput'>
          Remember me
        </label>
      </div>

      <div className='submitButton'>
        <button type='submit'>{submitButtonContent}</button>
      </div>

      <div className='Options'>
        <h3 className='Options__SignUp'>
          <Link to='/signup'> Sign Up </Link>
        </h3>
        <h3 className='Options__Title'>or sign in/up using</h3>

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

        <div className='Options__other'>
          <Link to='forgot-password'> Forgot Password? </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
