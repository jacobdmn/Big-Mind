import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";

import { useSelector } from "react-redux";

const App: React.FC = () => {
  const CURRENT_USER = useSelector(
    (state: any) => state.currentUserReducer.CURRENT_USER
  );
  const currentComponent = CURRENT_USER.userId === 0 ? <Log /> : <Home />;

  return <div className='App'>{currentComponent}</div>;
};

export default App;
