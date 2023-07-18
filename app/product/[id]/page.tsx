import Container from "@components/container";
import ProductImages from "@components/product-images";
import prisma from "@lib/prisma";
import { notFound } from "next/navigation";

export default async function Product({ params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id);
  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });


  return (
    <main>
      <Container>
        <div className="top-section">
          {/* <ProductImages image={product.image} productId={product.id} /> */}
        </div>
      </Container>
    </main>
  );
}
