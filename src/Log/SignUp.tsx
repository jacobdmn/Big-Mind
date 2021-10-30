import React, { useRef, useState } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";
import { SIGN_UP_ACTION } from "./../Redux/reducers/SIGN_UP";
import { useDispatch } from "react-redux";
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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const validateInput = (
    ref: React.RefObject<HTMLInputElement>,
    setWhat: React.Dispatch<React.SetStateAction<boolean>>
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
            error={nameError}
          />
        </div>

        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
            onChange={() => validateInput(refInputEmail, setEmailError)}
            error={emailError}
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
            onChange={() => validateInput(refInputPassword, setPasswordError)}
            error={passwordError}
          />
        </div>

        <div className='submitButton'>
          <button type='submit'>{submitButtonContent} </button>
        </div>
      </form>
      <div className='Options'>
        <div className='Options__other'>
          <Link to='/login'> Have an account? Login </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
