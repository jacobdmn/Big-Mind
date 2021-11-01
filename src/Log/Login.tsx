import React, { useRef, useState } from "react";

import Checkbox from "@mui/material/Checkbox";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { StyledTextField } from "./Log";

import { Link } from "react-router-dom";

import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  // signInWithRedirect,
  TwitterAuthProvider,
} from "@firebase/auth";
import { auth, db } from "./../firebase";
import { Alert } from "@mui/material";
import { collection, doc, setDoc, getDoc } from "@firebase/firestore";

const Login: React.FC<{
  submitButtonContent: string;
  setLoadingTrue: () => void;
  setLoadingDone: () => void;
}> = ({ submitButtonContent, setLoadingTrue, setLoadingDone }) => {
  const refInputEmail = useRef<HTMLInputElement>(null!);
  const refInputPassword = useRef<HTMLInputElement>(null!);

  /// Error Detecters
  const [errors, setErrors] = useState<{
    emailError: null | boolean;
    passwordError: null | boolean;
  }>({
    emailError: null,
    passwordError: null,
  });

  //// handle email/password process
  const handleLoginWithEmailAndPassword = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    /// Validation
    if (errors.emailError !== false || errors.passwordError !== false) return;

    /// set Loading to true
    setLoadingTrue();

    ///  login the account
    try {
      await signInWithEmailAndPassword(
        auth,
        refInputEmail.current.value,
        refInputPassword.current.value
      );
      // reset inputs [for security]
      refInputEmail.current.value = "";
      refInputPassword.current.value = "";

      console.log("Submited");
    } catch (error: any) {
      // alert(error.code);
      error.code === "auth/user-not-found" &&
        setErrors((prev) => ({ ...prev, emailError: true }));
      error.code === "auth/wrong-password" &&
        setErrors((prev) => ({ ...prev, passwordError: true }));
    }
    // reset loading
    setLoadingDone();
  };

  //// handle gmail sign in
  const handleLoginWithGmail = async () => {
    await signInWithPopup(auth, new GoogleAuthProvider());
    const currentUser = auth.currentUser;

    if (currentUser && currentUser.email !== null) {
      const newUserToCreate = {
        userId: currentUser.uid,
        fullName: currentUser.email.split("@")[0],
        userName: currentUser.email.split("@")[0],
      };

      const addNewUserLoggedWithGoogle = async () => {
        try {
          const usersCollection = collection(db, "users");
          const isUserInDB = doc(db, "users", currentUser.uid);
          const isUserInDB_Snap = await getDoc(isUserInDB);
          if (!isUserInDB_Snap.exists()) {
            await setDoc(
              doc(usersCollection, currentUser.uid),
              newUserToCreate
            );
            // alert("user added to db");
            window.location.reload();
          }
        } catch (error) {
          console.log(error);
        }
      };
      addNewUserLoggedWithGoogle();
      console.log("Logged in with google!");
    }
  };

  //// handle facebook sign in
  const handleLoginWithFacebook = async () => {
    await signInWithPopup(auth, new FacebookAuthProvider());
    console.log("Logged in with facebook !");
  };

  //// handle twitter sign in
  const handleLoginWithTwitter = async () => {
    await signInWithPopup(auth, new TwitterAuthProvider());
    console.log("Logged in with twitter!");
  };

  return (
    <>
      <h1 className='title'>Login to continue</h1>
      <form onSubmit={handleLoginWithEmailAndPassword} autoComplete='on'>
        <div className='name input'>
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

        <div className='rememberMe'>
          <Checkbox className='rememberMeInput' id='rememberMeInput' />
          <label className='rememberMeLabel' htmlFor='rememberMeInput'>
            Remember me
          </label>
        </div>

        <div className='submitButton'>
          <button type='submit'>{submitButtonContent}</button>
        </div>
      </form>

      {/* Error console */}
      <div className='ErrorConsole'>
        {errors.emailError && <Alert severity='warning'>Invalid Email</Alert>}
        {errors.passwordError && (
          <Alert severity='warning'>Invalid Password</Alert>
        )}
      </div>

      <div className='Options'>
        <Link to='/signup'>
          <h3 className='Options__SignUp'>Sign Up</h3>
        </Link>
        <h3 className='Options__Title'>or sign in/up using</h3>

        <div className='Options__Buttons'>
          <button className='google' onClick={handleLoginWithGmail}>
            <GoogleIcon />
          </button>

          <button className='facebook' onClick={handleLoginWithFacebook}>
            <FacebookIcon />
          </button>

          <button className='twitter' onClick={handleLoginWithTwitter}>
            <TwitterIcon />
          </button>
        </div>

        <div className='Options__other'>
          <Link to='forgot-password'> Forgot Password? </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
