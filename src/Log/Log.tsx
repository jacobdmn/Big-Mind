import React from "react";
import "./css/login.css";
import Login from "./Login";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import TextField from "@mui/material/TextField";
import { Switch, Route } from "react-router-dom";
import { styled } from "@mui/material";
export const StyledTextField = styled(TextField)({
  "&, &> *": {
    width: "100%",
    height: "100%",
  },
});

const Log = () => {
  /// var check isProcessing
  const [isProcessing, setIsProcessing] = React.useState(false);

  //// var button content: isProcessing ? Continue / Loading
  const [submitButtonContent, setSubmitButtonContent] =
    React.useState("Continue");

  /// the banner picture
  const Banner =
    "https://cmapp-prod.azureedge.net/assets/resources/5c3798b8410f47f4aa734ff5ecb37437-love.jpg?width=800";

  //// handle the login process
  const setLoadingTrue = () => {
    /// set Button Content
    setSubmitButtonContent("Loading..");
    /// set Loading : true
    setIsProcessing(true);
  };
  const setLoadingDone = () => {
    /// set Button Content
    setSubmitButtonContent("Done");
    // setIsProcessing(false);
  };

  return (
    <>
      <div className='Log__Form' style={{ backgroundImage: `url(${Banner})` }}>
        <div className='container'>
          {/* 
          Container:
            - Banner: contains just the banner
            - Login__formBox: contains the forms: login/signup/forgot password
          */}
          <div className='Banner'>
            <img
              className='logo'
              src='./imgs/_bigmid_files_/logo/logo_high_quality.png'
              alt=''
            />
            <h1>Big Mind</h1>
            <h2>Where Smart People Meet !</h2>
          </div>
          <div className='Login__formBox'>
            <fieldset disabled={isProcessing}>
              <div className='formApp'>
                <Switch>
                  <Route exact path='/'>
                    <Login
                      submitButtonContent={submitButtonContent}
                      setLoadingTrue={setLoadingTrue}
                      setLoadingDone={setLoadingDone}
                    />
                  </Route>
                  <Route exact path='/signup' component={SignUp}>
                    <SignUp
                      submitButtonContent={submitButtonContent}
                      setLoadingTrue={setLoadingTrue}
                      setLoadingDone={setLoadingDone}
                    />
                  </Route>
                  <Route exact path='/forgot-password'>
                    <ForgotPassword
                      submitButtonContent={submitButtonContent}
                      setLoadingTrue={setLoadingTrue}
                      setLoadingDone={setLoadingDone}
                    />
                  </Route>
                  <Route path='*'>404</Route>
                </Switch>
              </div>
            </fieldset>
          </div>
        </div>
        <footer>
          <h5>Powered By Jacob</h5>
        </footer>
      </div>
    </>
  );
};

export default Log;
