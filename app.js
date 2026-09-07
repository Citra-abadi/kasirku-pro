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
// Provider Google Auth
const googleProvider = new firebase.auth.GoogleAuthProvider();

// Fungsi Login dengan Google
function loginWithGoogle() {
  auth.signInWithPopup(googleProvider)
    .then((result) => {
      showToast('Login berhasil! Selamat datang, ' + result.user.displayName, 'success');
    })
    .catch((error) => {
      console.error(error);
      // Abaikan jika pop-up ditutup pengguna atau diklik ganda
      if (error.code === 'auth/cancelled-popup-request' || error.code === 'auth/popup-closed-by-user') {
        return;
      }
      showToast('Gagal login: ' + error.message, 'error');
    });
}
// Listener Status Autentikasi
auth.onAuthStateChanged((user) => {
  const loginScreen = document.getElementById('login-screen');
  const mainApp = document.getElementById('main-app');
  
  if (user) {
    // Pengguna sudah login -> Tampilkan aplikasi utama
    if (loginScreen) loginScreen.style.display = 'none';
    if (mainApp) mainApp.classList.remove('hidden');
    refreshCurrentPage();
  } else {
    // Pengguna belum login -> Tampilkan layar login
    if (loginScreen) loginScreen.style.display = 'flex';
    if (mainApp) mainApp.classList.add('hidden');
  }
});
// Pengait tombol login Google
document.addEventListener('DOMContentLoaded', () => {
  const btnGoogle = document.getElementById('google-login');
  if (btnGoogle) {
    btnGoogle.addEventListener('click', loginWithGoogle);
  }
});
