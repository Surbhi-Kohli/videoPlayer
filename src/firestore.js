import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyAB_oF3A50erwT5cvkgSeoxvaFsqxprz1U",
    authDomain: "videoanalytics-414b3.firebaseapp.com",
    projectId: "videoanalytics-414b3",
    storageBucket: "videoanalytics-414b3.appspot.com",
    messagingSenderId: "63961094206",
    appId: "1:63961094206:web:fbb1bf1332ac1a8b32996f",
    measurementId: "G-PM2PFS4C9Z"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;