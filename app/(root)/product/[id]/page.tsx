import Container from "@components/container";
import ProductGeneralInfo from "@components/product-general-info";
import ProductDetails from "@components/product-details";
import ProductInfo from "@components/product-info";
import ProductDesc from "@components/product-desc";
import getProduct from "@prisma-actions/getProduct";
import { notFound } from "next/navigation";

export default async function Product({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);
  const product = (await getProduct(id))[0];

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Container>
        <ProductGeneralInfo product={product} />
        <ProductInfo info={product.Info} />
        <ProductDetails details={product.Detail} />
        <ProductDesc desc={product.description} />
      </Container>
    </main>
  );
}
