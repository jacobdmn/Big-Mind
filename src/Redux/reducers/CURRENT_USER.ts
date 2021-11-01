import actionTypes from "./../actionTypes";

// auth.onAuthStateChanged((user) => {
//   if (user) {
//     const docRef = doc(db, "users", user.uid);
//     const docSnapFunc = async () => {
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         console.log("User data:", user.uid);
//         console.log("Document data:", docSnap.data());
//         dispatch(
//           LOGIN({
//             ...docSnap.data(),
//             userId: user.uid,
//           })
//         );
//       } else {
//         console.log("No such document!"); // doc.data() will be undefined in this case
//       }
//     };
//     docSnapFunc(); // i need to create this function to wrap the await by a sync
//   }
// });

interface USER_TS {
  userId: String;
  userName?: String;
  fullName?: String;
  age?: number;
  userAvatar?: String;
  location?: String;
}

export const LOGIN = (CURRENT_USER: USER_TS) => {
  return {
    type: actionTypes.LOGIN,
    payload: { CURRENT_USER },
  };
};

const currentUser = {
  userId: "",
  userName: "",
  fullName: "",
  age: 0,
  userAvatar: "",
  location: "",
  /// import here the current user id, and use that to get the rest of the infos from the database
};
const currentUserReducer = (
  state = currentUser,
  action: { type: string; payload: { CURRENT_USER: typeof currentUser } }
) => {
  if (action.type === actionTypes.LOGIN) {
    state = { ...state, ...action.payload.CURRENT_USER };
  }
  return state;
};

export default currentUserReducer;
