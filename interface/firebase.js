import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCAVzpGfkhoNblw3rvpe7DfyXCHmW7coWw",
    authDomain: "greenapple-dev.firebaseapp.com",
    projectId: "greenapple-dev",
    storageBucket: "greenapple-dev.appspot.com",
    messagingSenderId: "179643122745",
    appId: "1:179643122745:web:80e5ec6ccaea4ca51e79e8"
  };

const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();

export default auth;