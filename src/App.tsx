import React, { useState, useEffect } from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { auth } from "./firebase";
import { Switch, Route, useHistory } from "react-router";

const App: React.FC = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(true) : setCurrentUser(false);
    });
    history.push("/");
  }, [history]);

  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={currentUser ? Home : Log} />
      </Switch>
    </div>
  );
};

export default App;
