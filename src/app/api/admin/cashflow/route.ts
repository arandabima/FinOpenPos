export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getAuth } from "firebase-admin/auth";
import { getAdminApp } from "@/lib/firebase-admin";

export async function GET() {
  try {
    const session = cookies().get("__session")?.value;
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { adminApp, adminDb } = getAdminApp();
    const auth = getAuth(adminApp);
    const decoded = await auth.verifySessionCookie(session, true);

    const snapshot = await adminDb
      .collection("transactions")
      .where("status", "==", "completed")
      .where("user_uid", "==", decoded.uid)
      .orderBy("created_at")
      .get();

    const cashFlow: Record<string, number> = {};

    snapshot.forEach((doc) => {
      const data = doc.data();
      const date = data.created_at.toDate().toISOString().split("T")[0];
      cashFlow[date] = (cashFlow[date] || 0) + data.amount;
    });

    return NextResponse.json({ cashFlow });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
