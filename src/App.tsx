import React from "react";
import "./css/App.css";
// import Login from "./Login/Login";
import Home from "./Home/Home";
// import { pipe } from "lodash/fp";
import Index from "./Redux/./index";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Login /> */}
      <Index />
      <Home />
    </div>
  );
};

export default App;
