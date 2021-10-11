import React from "react";
import "./css/App.css";
// import Login from "./Login/Login";
import Header from "./Home/Header/Header";
import NavBar from "./Home/NavBar/NavBar";
import Screams from "./Home/Main/Screams/Screams";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* <Login /> */}
      <Header />
      <NavBar />
      <Screams />
    </div>
  );
};

export default App;
