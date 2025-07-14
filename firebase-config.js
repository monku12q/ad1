// firebase-config.js
const firebaseConfig = {
  apiKey: "AIzaSyAEr3Ap_Z9Ui8im7pDJm12ZPsZYDfAVRZk",
    authDomain: "check1-e0ca9.firebaseapp.com",
    databaseURL: "https://check1-e0ca9-default-rtdb.firebaseio.com",
    projectId: "check1-e0ca9",
    storageBucket: "check1-e0ca9.firebasestorage.app",
    messagingSenderId: "742895390856",
    appId: "1:742895390856:web:bebf7aaf5f3a0b2cb9cf3d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Optional: global database reference
const database = firebase.database();
