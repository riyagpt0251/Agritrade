// services/database.js
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "agritrade-db.firebaseapp.com",
  projectId: "agritrade-db",
  storageBucket: "agritrade-db.appspot.com",
  messagingSenderId: "987654321",
  appId: "1:987654321:web:fedcba987654"
};

const app = initializeApp(firebaseConfig, 'database');
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };