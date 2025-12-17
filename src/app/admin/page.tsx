"use client";

export const dynamic = "force-dynamic";

import { useEffect, useState } from "react";
import { getProducts, Product } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <div className="p-6">Loading products...</div>;
  }

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Products</h1>

      {products.length === 0 && <p>No products found</p>}

      {products.map((product) => (
        <Card key={product.id}>
          <CardHeader>
            <CardTitle>{product.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Price: Rp {product.price}</p>
            <p>Stock: {product.stock}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
