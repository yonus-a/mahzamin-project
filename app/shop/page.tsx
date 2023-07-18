import prisma from "@/lib/prisma";
import Container from "@components/container";
import ProductPagination from "@components/product-pagination";
import ShopTopSection from "@components/shop-top-section";
import ShowProducts from "@components/showProducts";

export const metadata = {
  title: "فروشگاه",
};

export default async function Shop({ searchParams }: { searchParams?: any }) {
  const take = 12;
  const page = Number.parseInt(searchParams?.page) || 0;
  const totalProducts = await prisma.product.count();
  const totalPages = Math.round(totalProducts / take);
  const products = await prisma.product.findMany({
    skip: page * take,
    take: take,
    select: {
      id: true,
      name: true,
      image: true
    },
    orderBy: {
      id: "desc",
    },
  });

  return (
    <main>
      <Container>
        <ShopTopSection
          currentPage={page}
          totalPages={totalPages}
          totalProducts={totalProducts}
        />
        <ShowProducts products={products} />
        <ProductPagination totalPages={totalPages} currentPage={page} />
      </Container>
    </main>
  );
}
