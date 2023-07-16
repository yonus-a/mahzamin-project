import Hero from "@components/hero";
import ProductsCategorization from "@components/products-categorization";
import MobileBasePrice from "@components/mobile-base-price";
import NewsArticles from "@components/news-articles";
import Container from "@components/container";
import AdsOne from "@components/ads-one";
import Brands from "@components/brands";
import AdsTow from "@components/ads-tow";

export default function Page() {
  return (
    <main>
      <Hero />
      <Container>
        <ProductsCategorization />
        <AdsOne/>
        <Brands/>
        <AdsTow/>
        <MobileBasePrice />
        <NewsArticles/>
      </Container>
    </main>
  );
}
