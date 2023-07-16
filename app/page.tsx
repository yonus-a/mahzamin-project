import Hero from "@components/hero";
import ProductsCategorization from "@components/products-categorization";
import Container from "@components/container";

export default function Page() {
  return (
    <main>
      <Hero />
      <Container>
        <ProductsCategorization />
      </Container>
    </main>
  );
}
