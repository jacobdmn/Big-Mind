import React, { useRef, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

import { signInWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./../firebase";

const Login: React.FC<{
  submitButtonContent: string;
  setLoadingTrue: () => void;
  setLoadingDone: () => void;
}> = ({ submitButtonContent, setLoadingTrue, setLoadingDone }) => {
  const refInputEmail = useRef<HTMLInputElement>(null!);
  const refInputPassword = useRef<HTMLInputElement>(null!);

  /// Validation
  const [emailError, setEmailError] = useState<boolean | null>(null);
  const [passwordError, setPasswordError] = useState<boolean | null>(null);

  /// Validation function
  const validateInput = (
    ref: React.RefObject<HTMLInputElement>,
    setWhat: React.Dispatch<React.SetStateAction<boolean | null>>
  ) => {
    Boolean(ref.current?.value) ? setWhat(false) : setWhat(true);
  };

  //// handle the login process
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (
      !Boolean(refInputEmail.current?.value) ||
      !Boolean(refInputPassword.current?.value)
    )
      return;
    setLoadingTrue();

    try {
      setTimeout(() => {
        ///  creating the account
        try {
          signInWithEmailAndPassword(
            auth,
            refInputEmail.current.value,
            refInputPassword.current.value
          ).then((err) => {
            // if all good, do this
            /// reset inputs [for security]
            refInputEmail.current.value = "";
            refInputPassword.current.value = "";
            // reset loading
            console.log("Continue");
            setLoadingDone();

            //// otherwise do this
          });
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    } catch {
      console.log("Error Signing up !");
    }
  };
  return (
    <>
      <h1 className='title'>Login to continue</h1>
      <form onSubmit={handleLogin} autoComplete='on'>
        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
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
      </form>
      <div className='Options'>
        <Link to='/signup'>
          <h3 className='Options__SignUp'>Sign Up</h3>
        </Link>
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
