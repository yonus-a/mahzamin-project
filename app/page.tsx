import Hero from "@components/hero";
import ProductsCategorization from "@components/products-categorization";
import Container from "@components/container";
import AdsOne from "@components/ads-one";

export default function Page() {
  return (
    <main>
      <Hero />
      <Container>
        <ProductsCategorization />
        <AdsOne/>
      </Container>
    </main>
  );
}
