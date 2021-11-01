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

      const docRef = doc(db, "users", user.uid);
      const docSnapFunc = async () => {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("User ID:", user.uid);
          console.log("User Info:", docSnap.data());
          dispatch(
            LOGIN({
              ...docSnap.data(),
              userId: user.uid,
            })
          );
          setCurrentUser(true);
        } else {
          console.log("No such document!"); // doc.data() will be undefined in this case
        }
      };
      docSnapFunc(); // i need to create this function to wrap the await by a sync
    });
  }, []);

  return (
    <div className='App'>
      <Switch>
        <Route path='/' component={currentUser ? Home : Log} />
      </Switch>
    </div>
  );
};

export default App;
