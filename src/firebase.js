import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBzkyqmjw_BvRHMShdmwQigLeeoX_OJeLM",
  authDomain: "app-clima-1dcd7.firebaseapp.com",
  databaseURL: "https://app-clima-1dcd7.firebaseio.com",
  projectId: "app-clima-1dcd7",
  storageBucket: "app-clima-1dcd7.appspot.com",
  messagingSenderId: "431370027388"
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };