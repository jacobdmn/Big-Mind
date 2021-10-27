import React from "react";
import "./css/App.css";
import Login from "./Log/Login";
import SignUp from "./Log/SignUp";
import Home from "./Home/Home";
// import { pipe } from "lodash/fp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* <Home /> */}
          <Route path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/signup' component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
