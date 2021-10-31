import React, { useRef } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const ForgotPassword = ({
  submitButtonContent,
}: {
  submitButtonContent: string;
}) => {
  const refInputEmail = useRef<HTMLInputElement>(null);

  const handleForgotPassword = () => {};

  return (
    <>
      <h1 className='title'>Reset you password</h1>
      <form onSubmit={handleForgotPassword} autoComplete='on'>
        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
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
