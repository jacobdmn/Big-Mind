import React from "react";
import "./css/App.css";
// import Login from "./Login/Login";
import Home from "./Home/Home";
// import { pipe } from "lodash/fp";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Login /> */}
      <Home />
    </div>
  );
};

export default App;
