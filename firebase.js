// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpyXvPuG7Qvk-8I-aesa4wuhEoe4yEUSQ",
  authDomain: "fb-test-project-6e017.firebaseapp.com",
  databaseURL:
    "https://fb-test-project-6e017-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "fb-test-project-6e017",
  storageBucket: "fb-test-project-6e017.appspot.com",
  messagingSenderId: "194105551236",
  appId: "1:194105551236:web:b4ca42ae0fbbbeec2755d1",
  measurementId: "G-4QXS2QJP5L",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth, firebase };
