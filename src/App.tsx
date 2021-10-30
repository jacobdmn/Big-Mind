import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { useSelector } from "react-redux";

const App: React.FC = () => {
  const CURRENT_USER = useSelector(
    (state: any) => state.currentUserReducer.CURRENT_USER
  );

  return (
    <div className='App'>
      {Boolean(CURRENT_USER.userId) ? <Home /> : <Log />}
    </div>
  );
};

export default App;
