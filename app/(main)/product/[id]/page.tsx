import ProductGeneralInfo from "@components/product-general-info";
import ProductDetails from "@components/product-details";
import getProduct from "@prisma-actions/getProduct";
import ProductInfo from "@components/product-info";
import ProductDesc from "@components/product-desc";
import Container from "@components/container";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function Product({ params }: Props) {
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
