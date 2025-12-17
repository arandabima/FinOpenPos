import admin from "firebase-admin";

let adminApp: admin.app.App;
let adminDb: admin.firestore.Firestore;

export function getAdminApp() {
  if (!admin.apps.length) {
    const projectId = process.env.FIREBASE_PROJECT_ID;
    const clientEmail = process.env.FIREBASE_CLIENT_EMAIL;
    const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    if (!projectId || !clientEmail || !privateKey) {
      throw new Error("Firebase Admin env variables not set");
    }

    admin.initializeApp({
      credential: admin.credential.cert({
        projectId,
        clientEmail,
        privateKey,
      }),
    });
  }

  adminApp = admin.app();
  adminDb = admin.firestore();
  return { adminApp, adminDb };
}
