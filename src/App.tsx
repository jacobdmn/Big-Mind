import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/App.css";
import Log from "./Log/Log";
import Home from "./Home/Home";
import { auth, db } from "./firebase";
import { Switch, Route, useHistory } from "react-router";
import { collection, doc, getDoc, setDoc } from "@firebase/firestore";
import { useDispatch } from "react-redux";
import { LOGIN } from "./Redux/reducers/CURRENT_USER";

const App: React.FC = () => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState(false);
  const dispatch = useDispatch();

  // the whole story is
  // on auth => login ?
  //              existed Used ?
  //                      *getDoc his [userName*, fullName*, userAvatar, location..] from db using his UID
  //                      *fullName, and username are required to load the Home page
  //                    dispatch his infos to redux
  //                    setCurrentUser(true) to redurect to Home
  //              doesnt exist ?
  //               console log error

  //           logout ?
  //              say good bye
  //              setCurrentUser(false) to redurect to Login

  //  We're DONE !

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        setCurrentUser(false);
        return;
      }
      const userProfileSnapFunction = async () => {
        const usersCollection = collection(db, "users");
        const userProfileReference = doc(db, "users", user.uid);
        const userProfileSnap = await getDoc(userProfileReference);
        if (user.uid && user.email) {
          if (!userProfileSnap.exists()) {
            console.log("User doesn't exist !.. let's create it");

            const newUser = {
              userName: user.email.split("@")[0],
              fullName: user.email.split("@")[0].toUpperCase(),
              userAvatar: "./imgs/users/john_smith/avatar/john_smith.jpg",
              age: 1,
              friendship: {
                friends: [],
                invits: [],
              },
              location: "US",
            };

            //// dispatch userInfos to Firebase
            await setDoc(doc(usersCollection, user.uid), newUser);

            //// dispatch userInfos to Home page
            dispatch(
              LOGIN({
                ...newUser,
                userId: user.uid,
              })
            );
            // axios.post();
            return;
          }
          console.log("User exists !.. let's just login");
          try {
            await axios.get("https://api.chatengine.io/users/me", {
              headers: {
                "project-id": "1369a0e9-3f10-4042-b741-1d8d4e1e5037",
                "user-name": user.email,
                "user-secret": user.uid,
              },
            });
          } catch (error) {
            console.log(error);
          }
          dispatch(
            LOGIN({
              ...userProfileSnap.data(),
              userId: user.uid,
            })
          );

          /// console log user infos
          console.log(`User ID:   ${user.uid}\n
                     User Info: ${userProfileSnap.data()}`);
        }
      };
      // i need to create this function to wrap the await by an async
      userProfileSnapFunction();
      /// set the current user to true
      setCurrentUser(true);
      history.push("/");
    });
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
