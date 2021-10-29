import React, { useRef } from "react";
import { StyledTextField } from "./Log";
import { Link } from "react-router-dom";

const SignUp = ({ submitButtonContent }: { submitButtonContent: string }) => {
  const refInputName = useRef<HTMLInputElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);

  return (
    <>
      <h1 className='title'>Sign Up</h1>
      <div className='name input'>
        <StyledTextField
          id='nameInput'
          label='Name'
          variant='outlined'
          inputRef={refInputName}
        />
      </div>

      <div className='email input'>
        <StyledTextField
          id='emailInput'
          label='Email'
          variant='outlined'
          inputRef={refInputEmail}
        />
      </div>

      <div className='password input'>
        <StyledTextField
          id='passwordInput'
          label='Password'
          variant='outlined'
          type='password'
          inputRef={refInputPassword}
          autoComplete='on'
        />
      </div>

      <div className='submitButton'>
        <button type='submit'>{submitButtonContent} </button>
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
