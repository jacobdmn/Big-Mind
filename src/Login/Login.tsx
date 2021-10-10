import React from "react";
import "./css/login.css";
// import LoadingButton from "@mui/lab/LoadingButton";
// import GoogleButton from "react-google-button";
import GoogleIcon from "@mui/icons-material/Google";
import Footer from "./Footer";

const Login = () => {
  return (
    <>
      <div className='login'>
        <div className='logo'>
          <img
            src='https://cdn4.iconfinder.com/data/icons/social-media-2070/140/_vine-512.png'
            alt=''
          />
          <h1>Big Mind.. Just Like Facebook, But worse</h1>
        </div>
        <div className='buttons'>
          <div>
            <button className='signIn'>
              <span>
                Continue with <GoogleIcon />
              </span>
            </button>
          </div>
          <div>
            <button className='demo'>
              <span>DEMO</span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
