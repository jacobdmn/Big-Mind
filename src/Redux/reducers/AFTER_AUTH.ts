// // import { CURRENT_USER } from './../database';
// import { collection, doc, getDoc, setDoc } from "@firebase/firestore";
// import { auth, db } from "../../firebase";
import actionTypes from "../actionTypes";

// // the whole story is
// // on auth change => login ?
// //              existed User ?
// //                    - getDoc his [userName*, fullName*, userAvatar, location..] from colleciton 'users' using his UID
// //                          PS: fullName, and username are required to load the Home page
// //                    - dispatch his infos to redux
// //                    - setCurrentUser(true) to redirect to Home
// //              doesnt exist ?
// //               console log error

// //           logout ?
// //              say good bye
// //              setCurrentUser(false) to redurect to Login

// //  We're DONE !

// const initialUserRedux = {
//   userId: "",
//   userName: "",
//   fullName: "",
//   age: 0,
//   userAvatar: "",
//   location: "",
// };

// const fetchOrCreate = async (fullName?: string) => {
//   let userInfos = {
//     userId: "",
//     userName: "",
//     fullName: "",
//     age: 0,
//     userAvatar: "",
//     location: "",
//   };

//   if (auth.currentUser) {
//     const { uid, email } = auth.currentUser;
//     try {
//       const usersCollection = collection(db, "users");
//       const UserRef = doc(db, "users", uid);
//       const User_Snap = await getDoc(UserRef);

//       if (User_Snap.exists()) {
//         userInfos = { ...userInfos, ...User_Snap.data() };
//         console.log("user logged in");
//       } else {
//         userInfos = {
//           ...userInfos,
//           fullName: fullName || email || "",
//           userName: email || "",
//         };
//         console.log("user signed up");
//       }
//       console.log(userInfos);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return userInfos;
// };

// const CURRENT_USER = (
//   state = initialUserRedux,
//   action: {
//     type: string;
//   }
// ) => {
//   let newState = state;
//   switch (action.type) {
//     case actionTypes.AFTER_AUTH:
//       newState = {
//         ...newState,
//         ...fetchOrCreate(),
//       };
//       break;
//   }
//   return newState;
// };

// export default CURRENT_USER;
