import React, { useState, useRef } from "react";
import "./css/login.css";
// import LoadingButton from "@mui/lab/LoadingButton";
// import GoogleButton from "react-google-button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

// import "./form-login";
const Login = () => {
  const [addClass, setAddClass] = useState(false);
  const [addClassPassword, setAddClassPassword] = useState(false);
  const refInput = useRef<HTMLInputElement>(null);
  const refInputPassword = useRef<HTMLInputElement>(null);
  const inputEffect = (
    Ref: React.RefObject<HTMLInputElement>,
    setClass: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (Ref !== null && Ref.current !== null && Ref.current.value !== null)
      Ref.current.value ? setClass(true) : setClass(false);
  };
  return (
    <>
      <div className='limiter'>
        <div className='container-login100'>
          <div className='wrap-login100'>
            <form className='login100-form validate-form'>
              <span className='login100-form-title p-b-43'>
                {" "}
                Login to continue{" "}
              </span>

              <div
                className='wrap-input100 validate-input'
                data-validate='Valid email is required: ex@abc.xyz'>
                <input
                  className={addClass ? "input100 focus" : "input100"}
                  type='text'
                  name='email'
                  ref={refInput}
                  onMouseEnter={() => setAddClass(true)}
                  onMouseLeave={() => {
                    inputEffect(refInput, setAddClass);
                  }}
                  onChange={() => {
                    inputEffect(refInput, setAddClass);
                  }}
                />
                <span className='focus-input100'></span>
                <span className='label-input100'>Email</span>
              </div>

              <div
                className='wrap-input100 validate-input'
                data-validate='Password is required'>
                <input
                  className={addClassPassword ? "input100 focus" : "input100"}
                  type='password'
                  name='pass'
                  ref={refInputPassword}
                  onMouseEnter={() => setAddClassPassword(true)}
                  onMouseLeave={() => {
                    inputEffect(refInputPassword, setAddClassPassword);
                  }}
                />
                <span className='focus-input100'></span>
                <span className='label-input100'>Password</span>
              </div>

              <div className='flex-sb-m w-full p-t-3 p-b-32 other-options'>
                <div className='contact100-form-checkbox'>
                  <input
                    className='input-checkbox100'
                    id='ckb1'
                    type='checkbox'
                    name='remember-me'
                  />
                  <label className='label-checkbox100' htmlFor='ckb1'>
                    Remember me
                  </label>
                </div>

                <div>
                  <button className='txt1'> Forgot Password? </button>
                </div>
              </div>

              <div className='container-login100-form-btn'>
                <button className='login100-form-btn'>Login</button>
              </div>

              <div className='text-center p-t-46 p-b-20 sign-up-other-options'>
                <span className='txt2'> or sign up using </span>
              </div>

              <div className='login100-form-social flex-c-m sign-up-other-options-links'>
                <button className='login100-form-social-item flex-c-m bg1 m-r-5'>
                  <GoogleIcon />
                </button>

                <button className='login100-form-social-item flex-c-m bg2 m-r-5'>
                  <FacebookIcon />{" "}
                </button>

                <button className='login100-form-social-item flex-c-m bg2-2 m-r-5'>
                  <TwitterIcon />{" "}
                </button>
              </div>
            </form>

            <div
              className='login100-more'
              style={{ backgroundImage: `url('./imgs/bg-login.jpg')` }}>
              <footer>
                <h5>Powered By Jacob</h5>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
