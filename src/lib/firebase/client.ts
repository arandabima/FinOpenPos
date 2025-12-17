import { initializeApp, getApps, getApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDMb2QFhupWmalXSijhdm5O9f8UxTetJ8g",
  authDomain: "kasir-app-23342.firebaseapp.com",
  projectId: "kasir-app-23342",
  storageBucket: "kasir-app-23342.firebasestorage.app",
  messagingSenderId: "427580957677",
  appId: "1:427580957677:web:853bd30765524aed253de4",
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// 🔐 (dipakai nanti kalau mau)
export const auth = getAuth(app)

// 🗄️ Firestore Database
export const db = getFirestore(app)

export default app
