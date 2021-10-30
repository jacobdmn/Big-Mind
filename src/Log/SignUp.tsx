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
  const refInputName = useRef<HTMLInputElement>(null);
  const refInputEmail = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);

  const [nameEmpty, setNameEmpty] = useState(false);
  const [emailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);
  //// handle the login process
  const handleSignUp = (e: React.SyntheticEvent) => {
    !refInputName.current && setNameEmpty(true);
    !refInputEmail.current && setEmailEmpty(true);
    !refInputPassword.current && setPasswordEmpty(true);

    if (nameEmpty || emailEmpty || passwordEmpty) return;
    e.preventDefault();
    setLoadingTrue();

    ///  creating the account
    try {
      setTimeout(() => {
        // dispatch(
        //   SIGN_UP_ACTION(
        //     refInputName.current.value,
        //     refInputEmail.current.value,
        //     refInputPassword.current.value
        //   )
        // );
        console.log("Done");

        // reset loading
        setLoadingDone();
      }, 2000);
    } catch {
      console.log("Error Signing up !");
    }
  };

  const [borderColor, setBorderColor] = useState("");
  useEffect(() => {
    !refInputName.current ? setBorderColor("error") : setBorderColor("primary");
  }, [refInputName.current]);
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
            // required
            color={borderColor}
          />
        </div>

        <div className='email input'>
          <StyledTextField
            id='emailInput'
            label='Email'
            variant='outlined'
            inputRef={refInputEmail}
            // required
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
            // required
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
