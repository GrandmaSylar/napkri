import { isLowStock, isSoldOut, CATEGORIES, type Product } from "@/lib/products";
import { getProducts } from "@/lib/catalog";
import { Hero, Ticker, PriceTiles, DealsPanel, CategoryGrid } from "@/components/home";
import { Container, ProductRow, SectionHeader } from "@/components/Section";
import { BundlePanel } from "@/components/BundlePanel";
import { Newsletter } from "@/components/Newsletter";

const WORKSTATION_SETUP = ["macbook-air-m2", "dell-ultrasharp-27-4k", "logitech-mx-master-3s", "samsung-t7-shield-2tb"];

export default async function Home() {
  const products = await getProducts();
  const bySlug = (slug: string) => products.find((p) => p.slug === slug);
  const deals = products.filter((p) => p.originalPrice);
  const newArrivals = products.filter((p) => p.isFeatured).slice(-4).reverse();
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);
  const almostGone = products.filter(isLowStock).slice(0, 4);
  const setup = WORKSTATION_SETUP.map(bySlug).filter((p): p is Product => p !== undefined && !isSoldOut(p));
  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.name, products.filter((p) => p.category === c.name).length]));
  const lowest = products.length ? Math.min(...products.map((p) => p.price)) : 0;

  return (
    <main>
      {products.length >= 2 && <Hero lead={products[0]} second={bySlug("thinkpad-x1-carbon-gen11") ?? products[1]} from={lowest} />}
      <Ticker />
      <PriceTiles />
      {deals.length > 0 && <DealsPanel deals={deals.slice(0, 3)} />}
      <ProductRow title="New arrivals" href="/shop?sort=newest" products={newArrivals} />
      <ProductRow title="Bestsellers" href="/shop?sort=popular" products={bestsellers} />
      <ProductRow title="Almost gone" href="/shop?stock=low" products={almostGone} />

      <section className="mt-12 sm:mt-20">
        <Container>
          <SectionHeader title="Shop by category" href="/categories" linkLabel="All categories" />
          <CategoryGrid counts={counts} />
        </Container>
      </section>

      <section className="mt-12 sm:mt-20">
        <Container>
          {setup.length >= 2 && <BundlePanel title="The workstation bundle" products={setup} />}
        </Container>
      </section>

      <section className="mt-12 sm:mt-20">
        <Container>
          <Newsletter />
        </Container>
      </section>
    </main>
  );
}
