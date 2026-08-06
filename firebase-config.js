// ============================================================
// CONFIGURAZIONE FIREBASE — da compilare UNA SOLA VOLTA
// Segui i passi nel README.md per ottenere questi valori gratis
// da https://console.firebase.google.com
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyAcRiwUleIbsnu7Ceh6z6H_z4wd0vR5taA",
  authDomain: "jobor26-29f54.firebaseapp.com",
  databaseURL: "https://jobor26-29f54-default-rtdb.europe-west1.firebasedatabase.app", // fondamentale: es. https://tuoprogetto-default-rtdb.europe-west1.firebasedatabase.app
  projectId: "jobor26-29f54",
  storageBucket: "jobor26-29f54.firebasestorage.app",
  messagingSenderId: "580061601874",
  appId: "1:580061601874:web:bf768cbecc7adf5c90bf8b"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
