import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // https://trekinbami.medium.com/using-environment-variables-in-react-6b0a99d83cf5
  // https://medium.com/better-programming/a-simple-and-easy-contact-form-step-by-step-tutorial-react-js-1532bc025980
  // https://www.privacypolicies.com/blog/privacy-policy-template/#:~:text=for%20Your%20Website-,What%20is%20a%20Privacy%20Policy%3F,or%20sold%20to%20third%20parties.
  // https://www.privacypolicies.com/blog/gdpr-privacy-policy/
  // https://www.youtube.com/watch?v=RKj3OjgftXc
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

const db = firebaseApp.firestore();

export default db;
