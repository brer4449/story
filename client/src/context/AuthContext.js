// import React, { useContext, useState, useEffect } from "react";
// import { auth } from "../firebase";

// *******************TODO: GET RID OF FIREBASE AND CONNECT TO MONGODB**********************
// const AuthContext = React.createContext();
// // hook that allows us access to our context
// export function useAuth() {
//   return useContext(AuthContext);
// }

// export function AuthProvider({ children }) {
//   const [currentUser, setCurrentUser] = useState();
//   const [loading, setLoading] = useState(true);

//   function signup(email, password) {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   function login(email, password) {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   function logout() {
//     return auth.signOut();
//   }

//   function resetPassword(email) {
//     return auth.sendPasswordResetEmail(email);
//   }

//   function updateEmail(email) {
//     return currentUser.updateEmail(email);
//   }

//   function updatePassword(password) {
//     return currentUser.updatePassword(password);
//   }

//   useEffect(() => {
//     // this firebase function allows us to set the user from here (either the current user or null)
//     // whenever we call createUserWithEmailAndPassword, this setCurrentUser function will be called and set that user for us
//     // only want this to run when we mount our component and only run once which is why it's in a useEffect
//     // want to unsubscribe from the below function whenever we're done
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       // firebase sets local storage, tokens for us so that we it can verify if we already have a user signed in, it'll connect that user for us and it'll use onAuthStateChanged but that means that we have an initial loading state that we have to worry about
//       setLoading(false);
//     });
//     // unsubscribe us from the onAuthStateChange listener above whenever we unmount this component (which is exactly what we want)
//     return unsubscribe;
//   }, []);

//   const value = {
//     currentUser,
//     login,
//     signup,
//     logout,
//     resetPassword,
//     updateEmail,
//     updatePassword,
//   };

//   return (
//     <AuthContext.Provider value={value}>
//       {/* check to see if we're loading, otherwise we don't want to run this -- Make sure we don't render ANY of our app until we have our currentUser being set for the very first time*/}
//       {!loading && children}
//     </AuthContext.Provider>
//   );
// }
