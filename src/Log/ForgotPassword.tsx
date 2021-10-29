import React, { useRef } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const ForgotPassword = ({
  submitButtonContent,
}: {
  submitButtonContent: string;
}) => {
  const refInputEmail = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className='title'>Reset you password</h1>
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
      <div className='Options'>
        <div className='Options__other'>
          <Link to='/login'> Back to Login </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
