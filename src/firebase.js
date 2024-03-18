import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAMtHtwTI3gaZ18_wLgUXbXJgm6JdOFQB0",
  authDomain: "contactlist-90842.firebaseapp.com",
  databaseURL: "https://contactlist-90842-default-rtdb.firebaseio.com",
  projectId: "contactlist-90842",
  storageBucket: "contactlist-90842.appspot.com",
  messagingSenderId: "495773300259",
  appId: "1:495773300259:web:77f9c209c72ab9b919e396",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
