import ProductGeneralInfo from "@components/product/product-general-info";
import ProductDetails from "@components/product/product-details";
import getProduct from "@server-actions/product/getProduct";
import ProductInfo from "@components/product/product-info";
import ProductDesc from "@components/product/product-desc";
import Container from "@components/general/container";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export default async function Product({ params }: Props) {
  const product = await getProduct({
    where: {
      id: +params.id,
    },
    select: {
      id: true,
      image: true,
      product_info: true,
      description: true,
      product_detail: true,
      product_image: true,
      product_color: {
        select: {
          name: true,
          code: true,
          id: true,
        },
      },
      category: true,
      brand: true,
    },
  });

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Container>
        <ProductGeneralInfo product={product} />
        <ProductInfo info={product.product_info} />
        <ProductDetails details={product.product_detail} />
        <ProductDesc desc={product.description} />
      </Container>
    </main>
  );
}
