import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export async function getProducts(): Promise<Product[]> {
  try {
    const snapshot = await getDocs(collection(db, "products"));

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Product, "id">),
    }));
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return [];
  }
}
