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

  /// Error Detecters
  const [errors, setErrors] = useState<{
    emailError: null | boolean;
    passwordError: null | boolean;
  }>({
    emailError: null,
    passwordError: null,
  });

  //// handle the login process
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (errors.emailError !== false || errors.passwordError !== false) return;

    /// set Loading to true
    setLoadingTrue();

    setTimeout(() => {
      ///  login the account
      try {
        signInWithEmailAndPassword(
          auth,
          refInputEmail.current.value,
          refInputPassword.current.value
        ).then((err) => {
          console.log(err);

          refInputEmail.current.value = "";
          refInputPassword.current.value = "";
          // reset loading
          console.log("Submited");
          setLoadingDone();
        });
      } catch (error) {
        console.log(error);
      }
      /// reset inputs [for security]
    }, 2000);
  };

  return (
    <>
      <h1 className='title'>Login to continue</h1>
      <form onSubmit={handleLogin} autoComplete='on'>
        <div className='name input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            type='email'
            variant='outlined'
            inputRef={refInputEmail}
            onChange={() => {
              /// regex validator
              const re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

              re.test(String(refInputEmail.current.value).toLowerCase())
                ? setErrors((prev) => ({ ...prev, emailError: false }))
                : setErrors((prev) => ({ ...prev, emailError: true }));

              ///  used email ?
              re.test(String(refInputEmail.current.value).toLowerCase())
                ? setErrors((prev) => ({ ...prev, emailUsedBefore: false }))
                : setErrors((prev) => ({ ...prev, emailUsedBefore: true }));
            }}
            error={errors.emailError || false}
            color={
              errors.emailError === true
                ? "warning"
                : errors.emailError === false
                ? "success"
                : "primary"
            }
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
            onChange={() => {
              Boolean(refInputPassword.current?.value.length > 5)
                ? setErrors((prev) => ({ ...prev, passwordError: false }))
                : setErrors((prev) => ({ ...prev, passwordError: true }));
            }}
            error={errors.passwordError || false}
            color={
              errors.passwordError === true
                ? "warning"
                : errors.passwordError === false
                ? "success"
                : "primary"
            }
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
