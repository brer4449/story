import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD-m0Uf9iT2p5NGu904sItqqeWJeMd9aCs",
  authDomain: "stories-told.firebaseapp.com",
  projectId: "stories-told",
  storageBucket: "stories-told.appspot.com",
  messagingSenderId: "718015417396",
  appId: "1:718015417396:web:24650481f5f36b78fdce61",
  measurementId: "G-NZ41ZLWQ5Q",
});

const db = firebaseApp.firestore();

export default db;
