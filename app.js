const firebaseConfig = {
  apiKey: "AIzaSyA26soMLKBIbU6iT_d-d1jC-ltHkxg787A",
  authDomain: "kasirku-8943c.firebaseapp.com",
  projectId: "kasirku-8943c",
  storageBucket: "kasirku-8943c.firebasestorage.app",
  messagingSenderId: "884474253537",
  appId: "1:884474253537:web:3ecbd6421982ffece5e7a0",
  measurementId: "G-D9GKG3WH9D"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
