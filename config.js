// Firebase Configuration
// Setup: README-SETUP.md पहा

const firebaseConfig = {
    apiKey: "AIzaSyCPOFqcdTLMmlE5gmWx-f1YdZFhVSmZgbU",
    authDomain: "cricket-score-app-2aff5.firebaseapp.com",
    databaseURL: "https://cricket-score-app-2aff5-default-rtdb.asia-southeast1.firebasedatabase.app/",
    projectId: "cricket-score-app-2aff5",
    storageBucket: "cricket-score-app-2aff5.firebasestorage.app",
    messagingSenderId: "690555919680",
    appId: "1:690555919680:web:d725e92c863707b7e82ea5",
    measurementId: "G-G89FWWZVEZ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref("manualTest").set({
  name: "Shashank",
  status: "Working",
  time: new Date().toString()
})
.then(() => {
  console.log("SUCCESS");
})
.catch((error) => {
  console.log("ERROR:", error);
});