import { cloudinaryUrl } from "@/lib/cloudinary";

export type Product = {
  slug: string;
  name: string;
  category: "Laptops" | "Desktops" | "Monitors" | "Storage" | "Audio" | "Accessories" | "Peripherals";
  price: number;
  originalPrice?: number;
  description: string;
  details: string;
  delivery: string;
  sizes?: string[];
  isFeatured?: boolean;
  isBestseller?: boolean;
  stockQuantity: number;
  imageUrl: string;
};

export type Category = Product["category"];

const FALLBACK_IMAGE = "/images/category-laptops.jpg";

/** Product photo URL; Cloudinary images are resized and auto-formatted on the fly. */
export function productImageSrc(product: Pick<Product, "imageUrl">, width = 900) {
  return product.imageUrl ? cloudinaryUrl(product.imageUrl, width) : FALLBACK_IMAGE;
}

export const CATEGORIES: { name: Category; blurb: string; image: string }[] = [
  { name: "Laptops", blurb: "MacBooks, ThinkPads & Ultrabooks", image: "/images/category-laptops.jpg" },
  { name: "Desktops", blurb: "Workstations & Mini PCs", image: "/images/category-desktops.jpg" },
  { name: "Monitors", blurb: "4K, Curved & Pro Displays", image: "/images/category-monitors.jpg" },
  { name: "Storage", blurb: "Fast NVMe SSDs & Portable Drives", image: "/images/category-storage.jpg" },
  { name: "Audio", blurb: "Wireless Headsets & ANC Earbuds", image: "/images/category-audio.jpg" },
  { name: "Accessories", blurb: "Thunderbolt Docks, Bags & Hubs", image: "/images/category-accessories.jpg" },
  { name: "Peripherals", blurb: "Mechanical Keyboards & Mice", image: "/images/category-peripherals.jpg" },
];

export const PRICE_TIERS = [
  { max: 1000, tone: "brand" },
  { max: 5000, tone: "mint" },
  { max: 10000, tone: "gold" },
  { max: 20000, tone: "coral" },
] as const;

export function categoryImageSrc(category: string) {
  return CATEGORIES.find((c) => c.name.toLowerCase() === category.toLowerCase())?.image ?? FALLBACK_IMAGE;
}

export const LOW_STOCK_THRESHOLD = 5;

export function isSoldOut(product: Pick<Product, "stockQuantity">) {
  return product.stockQuantity <= 0;
}

export function isLowStock(product: Pick<Product, "stockQuantity">) {
  return product.stockQuantity > 0 && product.stockQuantity < LOW_STOCK_THRESHOLD;
}
