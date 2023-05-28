/* eslint-disable no-unused-vars */
// For Firebase JS SDK v7.20.0 and later, measurementId is optional




import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBuaHzwQ23dQ0ktwyfiAqm5qvD7E3DCFaU",
  authDomain: "netflix-clone-c971f.firebaseapp.com",
  projectId: "netflix-clone-c971f",
  storageBucket: "netflix-clone-c971f.appspot.com",
  messagingSenderId: "480973405963",
  appId: "1:480973405963:web:f626b05fcfc47eacf0ac0e",
  measurementId: "G-W0TSZHTFYM"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const fbDatabase = getDatabase(app);
export const fStore = getFirestore(app);
export const fStorage = getStorage(app);


