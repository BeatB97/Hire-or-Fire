// ============================================================
// CONFIGURAZIONE FIREBASE — da compilare UNA SOLA VOLTA
// Segui i passi nel README.md per ottenere questi valori gratis
// da https://console.firebase.google.com
// ============================================================

const firebaseConfig = {
  apiKey: "INCOLLA_QUI_apiKey",
  authDomain: "INCOLLA_QUI_authDomain",
  databaseURL: "INCOLLA_QUI_databaseURL", // fondamentale: es. https://tuoprogetto-default-rtdb.europe-west1.firebasedatabase.app
  projectId: "INCOLLA_QUI_projectId",
  storageBucket: "INCOLLA_QUI_storageBucket",
  messagingSenderId: "INCOLLA_QUI_messagingSenderId",
  appId: "INCOLLA_QUI_appId"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
