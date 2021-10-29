import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
// import Home from "./Home/Home";
// import { Redirect } from "react-router-dom";
// import { useSelector } from "react-redux";

const App: React.FC = () => {
  // const CURRENT_USER = useSelector(
  //   (state: any) => state.currentUserReducer.CURRENT_USER
  // );

  return (
    <div className='App'>
      <Log />
      {/* {CURRENT_USER.userId !== 0 ? <Home /> : <Redirect push to='/login' />} */}
    </div>
  );
};

export default App;
