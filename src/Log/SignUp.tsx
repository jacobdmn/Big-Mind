import React, { useRef, useState } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";
import { SIGN_UP_ACTION } from "./../Redux/reducers/SIGN_UP";
import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

const SignUp: React.FC<{
  submitButtonContent: string;
  setLoadingTrue: () => void;
  setLoadingDone: () => void;
}> = ({ submitButtonContent, setLoadingTrue, setLoadingDone }) => {
  const dispatch = useDispatch();

  /// full name, email, password
  const refInputName = useRef<HTMLInputElement>(null!);
  const refInputEmail = useRef<HTMLInputElement>(null!);
  const refInputPassword = useRef<HTMLInputElement>(null!);

  /// Error Detecters
  const [nameError, setNameError] = useState<boolean | null>(null);
  const [emailError, setEmailError] = useState<boolean | null>(null);
  const [passwordError, setPasswordError] = useState<boolean | null>(null);

  const validateInput = (
    ref: React.RefObject<HTMLInputElement>,
    setWhat: React.Dispatch<React.SetStateAction<boolean | null>>
  ) => {
    Boolean(ref.current?.value) ? setWhat(false) : setWhat(true);
  };

  //// handle the login process
  const handleSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (
      !Boolean(refInputName.current?.value) ||
      !Boolean(refInputEmail.current?.value) ||
      !Boolean(refInputPassword.current?.value)
    )
      return;
    /// set Loading to true
    setLoadingTrue();

    ///  creating the account
    try {
      setTimeout(() => {
        dispatch(
          SIGN_UP_ACTION(
            refInputName.current.value,
            refInputEmail.current.value,
            refInputPassword.current.value
          )
        );
        console.log("Done");

        // reset loading
        setLoadingDone();
      }, 2000);
    } catch {
      console.log("Error Signing up !");
    }
  };

  return (
    <>
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={handleSignUp} autoComplete='on'>
        <div className='name input'>
          <StyledTextField
            id='nameInput'
            label='Name'
            variant='outlined'
            inputRef={refInputName}
            onChange={() => validateInput(refInputName, setNameError)}
            error={nameError || false}
          />
        </div>

        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
            onChange={() => validateInput(refInputEmail, setEmailError)}
            error={emailError || false}
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
              Boolean(refInputPassword.current?.value.length > 6)
                ? setPasswordError(false)
                : setPasswordError(true);
            }}
            error={passwordError || false}
          />
        </div>

        <div className='submitButton'>
          <button type='submit'>{submitButtonContent} </button>
        </div>
      </form>
      <div className='ErrorConsole'>
        {/* Full name Verification */}
        {nameError === false ? (
          <Alert severity='success'> Full Name </Alert>
        ) : nameError === true ? (
          <Alert severity='error'> Full Name</Alert>
        ) : (
          <Alert severity='info'> Full Name required</Alert>
        )}

        {/* Email Verification */}
        {emailError === false ? (
          <Alert severity='success'> Email </Alert>
        ) : emailError === true ? (
          <Alert severity='error'> Email</Alert>
        ) : (
          <Alert severity='info'> Email required</Alert>
        )}

        {/* Password Verification */}
        {passwordError === false ? (
          <Alert severity='success'> Password </Alert>
        ) : passwordError === true ? (
          <Alert severity='error'> Password</Alert>
        ) : (
          <Alert severity='info'>
            password must contain:
            <br /> &gt; 6 characters
            <br /> &gt; 1 Uppercase and a number
          </Alert>
        )}
      </div>
      <div className='Options'>
        <div className='Options__other'>
          <Link to='/login'> Have an account? Login </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
