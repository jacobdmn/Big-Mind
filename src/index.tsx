import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { doc, getDoc } from "firebase/firestore";

// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require("firebase-functions");

// The Firebase Admin SDK to access Firestore.
const admin = require("firebase-admin");
admin.initializeApp();

exports.getScreams = functions.https.onRequest((req: any, res: any) => {
  admin
    .firestore()
    .collection("screams")
    .get()
    .then((data: any) => {
      let screams: any = [];
      data.forEach((doc: any) => screams.push(doc.data()));
      return res.json(screams);
    })
    .catch((err: any) => console.error(err));
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
