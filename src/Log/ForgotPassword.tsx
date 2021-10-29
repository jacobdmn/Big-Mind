import React, { useRef } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const refInputEmail = useRef<HTMLInputElement>(null);

  return (
    <div className='Login__formBox'>
      <h1 className='title'>Reset you password</h1>
      <div className='formApp'>
        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
          />
        </div>

        <div className='submitButton'>
          <button>Continue</button>
        </div>
        <div className='Options'>
          <div className='Options__other'>
            <Link to='/login'> Back to Login </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
