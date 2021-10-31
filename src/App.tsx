import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { auth } from "./firebase";
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState<boolean>();

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(Boolean(user));
    });
  }, []);

  // return <div className='App'>{currentUser ? <Home /> : <Log />}</div>;
  return (
    <div className='App'>
      <Log />
    </div>
  );
};

export default App;
