// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4YVv1dcm8AsGhwmxckOsojcVOkcN4-iI",
  authDomain: "fir-auth-47b3d.firebaseapp.com",
  projectId: "fir-auth-47b3d",
  storageBucket: "fir-auth-47b3d.appspot.com",
  messagingSenderId: "121823743292",
  appId: "1:121823743292:web:6e692763f1969816212239"
};

// Initialize Firebase
let app;
if (firebase.apps.length===0) {
    app= firebase.initializeApp(firebaseConfig);
}   else {
    app = firebase.app()
}

const auth=firebase.auth()

export { auth };