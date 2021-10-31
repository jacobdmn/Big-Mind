import React from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { auth } from "./firebase";
import { Switch, Route } from "react-router";
const App: React.FC = () => {
  const [currentUser, setCurrentUser] = React.useState(false);

  React.useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(Boolean(user));
    });
  }, []);

  return (
    <div className='App'>
      {
        <Switch>
          <Route path='/' component={currentUser ? Home : Log} />
        </Switch>
      }
    </div>
  );
};

export default App;
