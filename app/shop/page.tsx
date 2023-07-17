import prisma from "@/lib/prisma";
import Container from "@components/container";
import ProductPagination from "@components/product-pagination";
import ShopTopSection from "@components/shop-top-section";
import ShowProducts from "@components/showProducts";

export const metadata = {
  title: "فروشگاه",
};

const take = 12;

async function getProducts(page: number) {
  const totalResult = await prisma.product.count();
  const products = await prisma.product.findMany({
    skip: page * take,
    take: take,
    orderBy: {
      id: "asc",
    },
  });

  return {
    totalResult,
    products,
  };
}

export default async function Shop({ searchParams }: { searchParams?: any }) {
  const page = Number.parseInt(searchParams?.page) || 0;
  const { products, totalResult } = await getProducts(page);
  const totalPages = Math.round(totalResult / take);

  return (
    <main>
      <Container>
        <ShopTopSection
          currentPage={page}
          totalPages={totalPages}
          totalResult={totalResult}
        />
        <ShowProducts products={products} />
        <ProductPagination totalPages={totalPages} currentPage={page}/>
      </Container>
    </main>
  );
}
