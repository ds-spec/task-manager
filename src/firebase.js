import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: "task-auth-50896.appspot.com",
  messagingSenderId: "932305602137",
  appId: "1:932305602137:web:2be13557dbcd3228db9348",
  measurementId: "G-ME4EKZDX3S",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };
