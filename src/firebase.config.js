import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyB6dpCEdPUQK_-7MAe82Li7l7uKi0gIHFc",
  authDomain: "furniture-ecommerce-f672e.firebaseapp.com",
  projectId: "furniture-ecommerce-f672e",
  storageBucket: "furniture-ecommerce-f672e.appspot.com",
  messagingSenderId: "610995775456",
  appId: "1:610995775456:web:d900425f42d6254bad2d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;