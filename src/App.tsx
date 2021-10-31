import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
const App: React.FC = () => {
  // const CURRENT_USER = useSelector(
  //   (state: any) => state.currentUserReducer.CURRENT_USER
  // );

  let CURRENT_USER;
  onAuthStateChanged(auth, (user) => {
    CURRENT_USER = Boolean(user);
  });
  return <div className='App'>{CURRENT_USER ? <Home /> : <Log />}</div>;
};

export default App;
