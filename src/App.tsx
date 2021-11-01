import React, { useState, useEffect } from "react";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { auth, db } from "./firebase";
import { Switch, Route, useHistory } from "react-router";
import { doc, getDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { LOGIN } from "./Redux/reducers/CURRENT_USER";

const App: React.FC = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(false);
        return;
      }
      const userProfileSnapFunction = async () => {
        const userProfileReference = doc(db, "users", user.uid);
        const userProfileSnap = await getDoc(userProfileReference);
        if (!userProfileSnap.exists()) {
          console.log("User doesn't exist !..");
          return;
        }
        console.log("User exists !.. let's just login");
        dispatch(
          LOGIN({
            ...userProfileSnap.data(),
            userId: user.uid,
          })
        );
        /// set the current user to true
        setCurrentUser(true);

        /// console log user infos
        console.log(`User ID:   ${user.uid}\n
                     User Info: ${userProfileSnap.data()}`);
      };
      // i need to create this function to wrap the await by an async
      userProfileSnapFunction();
    });
    history.push("/");
  }, [dispatch, history]);

  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={currentUser ? Home : Log} />
      </Switch>
    </div>
  );
};

export default App;
