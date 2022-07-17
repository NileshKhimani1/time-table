import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
let firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  databaseURL:
    "https://vue-time-table-default-rtdb.asia-southeast1.firebasedatabase.app/",
};
const app = initializeApp(firebaseConfig);
const authObj = getAuth(app);
const database = getDatabase(app);
export { authObj, database };
