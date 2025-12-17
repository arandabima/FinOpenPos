import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMb2QFhupWmalXSijhdm5O9f8UxTetJ8g",
  authDomain: "kasir-app-23342.firebaseapp.com",
  projectId: "kasir-app-23342",
  storageBucket: "kasir-app-23342.firebasestorage.app",
  messagingSenderId: "427580957677",
  appId: "1:427580957677:web:853bd30765524aed253de4",
  measurementId: "G-ZKV2NDP531",
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const db = getFirestore(firebaseApp);
