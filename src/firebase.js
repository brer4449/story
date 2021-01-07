import firebase from "firebase/app";
// Authentication module for Firebase
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD-m0Uf9iT2p5NGu904sItqqeWJeMd9aCs",
  authDomain: "stories-told.firebaseapp.com",
  projectId: "stories-told",
  storageBucket: "stories-told.appspot.com",
  messagingSenderId: "718015417396",
  appId: "1:718015417396:web:24650481f5f36b78fdce61",
  measurementId: "G-NZ41ZLWQ5Q",

  // https://medium.com/better-programming/a-simple-and-easy-contact-form-step-by-step-tutorial-react-js-1532bc025980
  // https://www.youtube.com/watch?v=RKj3OjgftXc
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;
