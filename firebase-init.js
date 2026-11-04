import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { 
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
  signOut, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { 
  getDatabase, ref, set, get, child, update, onValue 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Ваш конфиг из старой версии
const firebaseConfig = {
  apiKey: "AIzaSyCKXJiCvZ-tm3QS3xSsx942pxjvwGoknVI",
  authDomain: "msvs-1deab.firebaseapp.com",
  databaseURL: "https://msvs-1deab-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "msvs-1deab",
  storageBucket: "msvs-1deab.firebasestorage.app",
  messagingSenderId: "1033528706185",
  appId: "1:1033528706185:web:e640d26424d6c19c56b258",
  measurementId: "G-4367JJ0CSS"
};

const app = initializeApp(firebaseConfig);

// Экспортируем всё в глобальную область (window), чтобы основной скрипт это увидел
window.MSVS_FIREBASE = {
  app: app,
  auth: getAuth(app),
  db: getDatabase(app),
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  ref,
  set,
  get,
  child,
  update,
  onValue
};