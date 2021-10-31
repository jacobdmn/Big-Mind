import React, { useRef, useState } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";
// import { SIGN_UP_ACTION } from "./../Redux/reducers/SIGN_UP";
// import { useDispatch } from "react-redux";
import Alert from "@mui/material/Alert";

import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from "./../firebase";

const SignUp: React.FC<{
  submitButtonContent: string;
  setLoadingTrue: () => void;
  setLoadingDone: () => void;
}> = ({ submitButtonContent, setLoadingTrue, setLoadingDone }) => {
  // const dispatch = useDispatch();

  /// full name, email, password
  const refInputName = useRef<HTMLInputElement>(null!);
  const refInputEmail = useRef<HTMLInputElement>(null!);
  const refInputPassword = useRef<HTMLInputElement>(null!);

  /// Error Detecters
  const [errors, setErrors] = useState<{
    nameError: null | boolean;
    emailError: null | boolean;
    emailUsedBefore: null | boolean;
    passwordError: null | boolean;
  }>({
    nameError: null,
    emailError: null,
    emailUsedBefore: null,
    passwordError: null,
  });

  //// handle the login process
  const handleSignUp = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (
      errors.nameError !== false ||
      errors.emailError !== false ||
      errors.passwordError !== false
    )
      return;

    /// set Loading to true
    setLoadingTrue();

    try {
      setTimeout(() => {
        ///  login the account
        try {
          createUserWithEmailAndPassword(
            auth,
            refInputEmail.current.value,
            refInputPassword.current.value
          ).then((err) => {
            console.log(err.operationType.charCodeAt);

            refInputName.current.value = "";
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
    } catch {
      console.log("Error Signing up !");
    }
  };

  return (
    <>
      <h1 className='title'>Sign Up</h1>
      <form onSubmit={handleSignUp} autoComplete='on'>
        {/* FULL NAME FIELD */}
        <div className='name input'>
          <StyledTextField
            id='nameInput'
            label='Name'
            variant='outlined'
            inputRef={refInputName}
            onChange={() => {
              refInputName.current?.value.length > 3
                ? setErrors((prev) => ({ ...prev, nameError: false }))
                : setErrors((prev) => ({ ...prev, nameError: true }));
            }}
            error={errors.nameError || false}
            color={
              errors.nameError === true
                ? "warning"
                : errors.nameError === false
                ? "success"
                : "primary"
            }
          />
        </div>

        {/* EMAIL FIELD */}
        <div className='email input'>
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

        {/* PASSWORD FIELD */}
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

        <div className='submitButton'>
          <button type='submit'>{submitButtonContent} </button>
        </div>
      </form>

      {/*  ERROR CONSOLE  */}
      <div className='ErrorConsole'>
        {/* Password Verification */}
        {errors.emailUsedBefore && <Alert severity='warning'>Used Email</Alert>}
        {errors.passwordError && (
          <Alert severity='warning'>password &gt; 5 characters</Alert>
        )}
      </div>
      <div className='Options'>
        <div className='Options__other'>
          <Link to='/'> Have an account? Login </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
