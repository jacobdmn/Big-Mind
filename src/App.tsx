import React from "react";
import "./css/App.css";
// import Login from "./Login/Login";
import Home from "./Home/Home";
import { pipe } from "lodash/fp";

const trim = (text: string) => text.trim();
const toLower = (text: string) => text.toLowerCase();
const wrap = (wrapper: string) => (text: string) =>
  `<${wrapper}>${text}</${wrapper}>`;

const applyFuncs = pipe(trim, toLower, wrap("div"));

const result = applyFuncs("This is a real Redux Philosophy tutorial !");

const App: React.FC = () => {
  alert(result);
  return (
    <div className='App'>
      {/* <Login /> */}
      {/* <Home /> */}
    </div>
  );
};

export default App;
