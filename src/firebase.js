import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseApp = {
  apiKey: "AIzaSyCAtZn1kKDu0s__y8lD4aL_-qeP9wO5I0A",
  authDomain: "clone-bb5db.firebaseapp.com",
  projectId: "clone-bb5db",
  storageBucket: "clone-bb5db.appspot.com",
  messagingSenderId: "951941581649",
  appId: "1:951941581649:web:6c5409a996e399d027a170",
};

const app = initializeApp(firebaseApp);

const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
