import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDmaIDevrJgp7Icr82h1uj1Jr70NlWkzp0",
    authDomain: "sdi2025.firebaseapp.com",
    databaseURL: "https://sdi2025-default-rtdb.firebaseio.com",
    projectId: "sdi2025",
    storageBucket: "sdi2025.firebasestorage.app",
    messagingSenderId: "423897124456",
    appId: "1:423897124456:web:da65b92bd35cfb1512f5dd"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Get the Realtime Database
const database = getDatabase(app);

export { database };