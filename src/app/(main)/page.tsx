import ProductsCategorization from "@components/product/products-categorization";
import filterProducts from "@server-actions/product/filterProducts";
import NewsArticles from "@components/area/news-articles";
import ProductSlider from "@components/product/slider";
import Container from "@components/general/container";
import ProductGrid from "@components/product/grid";
import AdsOne from "@components/area/ads-one";
import Hero from "@components/area/hero";
import Brands from "@components/brands";

export default async function Page() {
  const { products } = await filterProducts({
    searchParams: {},
    take: 10,
    page: 1,
  });

  return (
    <main>
      <Hero />
      <Container>
        <ProductsCategorization />
        <ProductSlider
          style={{ background: "var(--clr-blue)" }}
          products={products}
          title="محصولات جدید"
        />
        <AdsOne />
        <Brands />
        <ProductGrid products={products} title="کالا های پرفروش" />
        <ProductSlider
          style={{ background: "var(--clr-red)" }}
          products={products}
          title="محصولات جدید"
        />
        <NewsArticles />
      </Container>
    </main>
  );
}
