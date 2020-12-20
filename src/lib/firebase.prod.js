import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCWEIVJC7ELe-rEo7zBkAqNug22wSuamnY",
  authDomain: "fully-netflix-clone.firebaseapp.com",
  projectId: "fully-netflix-clone",
  storageBucket: "fully-netflix-clone.appspot.com",
  messagingSenderId: "427523479589",
  appId: "1:427523479589:web:b86592d689ff0e759587cc"
};

const firebase = Firebase.initializeApp(config);

export { firebase };
