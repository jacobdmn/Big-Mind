import React from "react";
import "./css/App.css";
import Social from "./social/Social";

interface Props {
  title: string;
}

const App: React.FC<Props> = (Props) => {
  return (
    <div className='App'>
      <h1>THIS IS {Props.title}</h1>
      <hr />
      <Social />
    </div>
  );
};

export default App;
