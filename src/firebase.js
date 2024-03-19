import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "contactlist-90842.firebaseapp.com",
  databaseURL: "https://contactlist-90842-default-rtdb.firebaseio.com",
  projectId: "contactlist-90842",
  storageBucket: "contactlist-90842.appspot.com",
  messagingSenderId: "495773300259",
  appId: FIREBASE_API_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
