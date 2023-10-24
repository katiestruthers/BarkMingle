import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2NJ9K4XDwnvXwGO8-pY3908FsPEHt2sI",
  authDomain: "barkmingle-d1178.firebaseapp.com",
  projectId: "barkmingle-d1178",
  storageBucket: "barkmingle-d1178.appspot.com",
  messagingSenderId: "954016771264",
  appId: "1:954016771264:web:0c5cf92a299cfcbb42d125"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);