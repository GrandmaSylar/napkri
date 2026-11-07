import type { Metadata } from "next";
import { WishlistView } from "@/components/WishlistView";
import { getProducts } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Wishlist — Nakpri Laptops and Accessories",
};

export default async function WishlistPage() {
  return <WishlistView products={await getProducts()} />;
}
