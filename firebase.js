import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAqB1WnUP9iP9cQEcuT9sD9_s0-tqPinHE",
  authDomain: "amzn-web-yt.firebaseapp.com",
  projectId: "amzn-web-yt",
  storageBucket: "amzn-web-yt.appspot.com",
  messagingSenderId: "688309289474",
  appId: "1:688309289474:web:8bd4f243e6a37ded0b9d1b"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
export default db;