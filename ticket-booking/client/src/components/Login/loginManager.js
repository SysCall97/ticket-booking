import firebase from 'firebase/app'
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAR5rOK05ZkjjXTYMe-T-Fxvaz2o6jGDL8",
    authDomain: "ticket-booking-8c767.firebaseapp.com",
    projectId: "ticket-booking-8c767",
    storageBucket: "ticket-booking-8c767.appspot.com",
    messagingSenderId: "594646372385",
    appId: "1:594646372385:web:59deb49f06facf49891360"
};

export const initializeSigninFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
}

export const googleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  return firebase.auth().signInWithPopup(provider)
    .then(res => {
      const newUser = {
        displayName: res.user.displayName,
        email: res.user.email,
        photoURL: res.user.photoURL,
        isLoggedIn: true,
        error: ""
      }
      
      return newUser;
    })
    .catch(error => {
      const newUserInfo = {
        loggedIn: false,
        error: error.message,
      };
      newUserInfo.isLoggedIn = false;
      return newUserInfo;
    });
}

export const signOut = () => {
  firebase.auth().signOut();
}