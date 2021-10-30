import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // New import
import { getAnalytics } from "firebase/analytics";

/// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyDe-HEYBHVcwh_eOtTMQTaN4c3jo7Up2ew",
  authDomain: "big-mind-community.firebaseapp.com",
  databaseURL:
    "https://big-mind-community-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "big-mind-community",
  storageBucket: "big-mind-community.appspot.com",
  messagingSenderId: "93563529582",
  appId: "1:93563529582:web:3115c8ff15503b01dc797f",
  measurementId: "G-7KX4T6PP67",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const GLOBAL_DB = getFirestore();

export default app;
