import Container from "@components/container";
import ProductGeneralInfo from "@components/product-general-info";
import ProductDetails from "@components/product-details";
import ProductInfo from "@components/product-info";
import ProductDesc from "@components/product-desc";
import { notFound } from "next/navigation";
import prisma from "@lib/prisma";

export default async function Product({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Container>
        <ProductGeneralInfo product={product} />
        <ProductInfo id={product.id} />
        <ProductDetails id={product.id} />
        <ProductDesc desc={product.description} />
      </Container>
    </main>
  );
}
