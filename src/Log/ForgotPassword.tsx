import React, { useRef, useState } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const ForgotPassword: React.FC<{
  submitButtonContent: string;
  setLoadingTrue: () => void;
  setLoadingDone: () => void;
}> = ({ submitButtonContent, setLoadingTrue, setLoadingDone }) => {
  const refInputEmail = useRef<HTMLInputElement>(null!);

  /// Error Detecters
  const [emailError, setEmailError] = useState<null | boolean>(null);

  //// handle the login process
  const handleForgotPassword = (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (emailError) return;

    /// set Loading to true
    setLoadingTrue();

    setTimeout(() => {
      ///  login the account
      try {
      } catch (error) {
        console.log(error);
      }
      /// reset inputs [for security]
    }, 2000);
  };

  return (
    <>
      <h1 className='title'>Reset you password</h1>
      <form onSubmit={handleForgotPassword} autoComplete='on'>
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
                ? setEmailError(false)
                : setEmailError(true);

              ///  used email ?
              re.test(String(refInputEmail.current.value).toLowerCase())
                ? setEmailError(false)
                : setEmailError(true);
            }}
            error={emailError || false}
            color={
              emailError === true
                ? "warning"
                : emailError === false
                ? "success"
                : "primary"
            }
          />
        </div>

        <div className='submitButton'>
          <button type='submit'>{submitButtonContent} </button>
        </div>
      </form>
      <div className='Options'>
        <div className='Options__other'>
          <Link to='/'> Back to Login </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
