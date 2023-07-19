import Container from "@components/container";
import ProductGeneralInfo from "@components/product-general-info";
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
      </Container>
    </main>
  );
}
