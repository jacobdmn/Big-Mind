import React from "react";
import "./css/App.css";
import Login from "./Login/Login";
import Social from "./Social/Social";
import Footer from "./Login/Footer";

const App: React.FC = () => {
  return (
    <div className='App'>
      {/* VIDEO BACKGROUND */}
      {/* <video autoPlay muted loop id='video-bg' src='./imgs/bg.mp4' /> */}
      <Login />
    </div>
  );
};

export default App;
