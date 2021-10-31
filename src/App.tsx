import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "./firebase";
const App: React.FC = () => {
  // const CURRENT_USER = useSelector(
  //   (state: any) => state.currentUserReducer.CURRENT_USER
  // );

  const [currentUser, setCurrentUser] = React.useState<boolean>();

  React.useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(Boolean(user));
    });
  }, []);

  return <div className='App'>{currentUser ? <Home /> : <Log />}</div>;
};

export default App;
