import { CURRENT_USER } from "./../database";
import { auth } from "./../../firebase";

let currentUserId;
auth.onAuthStateChanged((user: any) => (currentUserId = user?.uid));

const currentUser = {
  currentUserId,
  /// 1- import here the current user id
  /// 2- use that to get the rest of the infos from the database
};

export default currentUser;
