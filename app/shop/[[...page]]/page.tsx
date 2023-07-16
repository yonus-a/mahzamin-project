import prisma from "@/lib/prisma";
import Container from "@components/container";
import ProductPagination from "@components/product-pagination";
import ShopTopSection from "@components/shop-top-section";
import ShowProducts from "@components/showProducts";

export const metadata = {
  title: "فروشگاه",
};

async function getProducts(page: number) {
  const count = await prisma.product.count();
  const products = await prisma.product.findMany({
    skip: page * 12,
    take: 12,
    orderBy: {
      id: "asc",
    },
  });

  return {
    count,
    products,
  };
}

export default async function Shop({ params }: { params: { page: number } }) {
  const { products, count } = await getProducts(params.page || 0);

  return (
    <main>
      <Container>
        <ShopTopSection />
        <ShowProducts products={products} />
        <ProductPagination count={2} />
      </Container>
    </main>
  );
}
