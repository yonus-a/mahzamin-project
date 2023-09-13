import Container from "@components/container";
import ProductPagination from "@components/product-pagination";
import ShopTopSection from "@components/shop-top-section";
import ShowProducts from "@components/showProducts";
import getProducts from "@prisma-actions/getProducts";

export const metadata = {
  title: "فروشگاه",
};

export default async function Shop({ searchParams }: { searchParams?: any }) {
  const take = 12;
  const page = Number.parseInt(searchParams?.page) || 0;
  const { products, totalProduct } = await getProducts(
    page,
    take,
    searchParams
  );
  const totalPages = Math.round(totalProduct / take);

  return (
    <main>
      <Container>
        <ShopTopSection
          currentPage={page}
          totalPages={totalPages}
          totalProducts={totalProduct}
        />
        <ShowProducts products={products} />
        <ProductPagination
          totalPages={totalPages}
          currentPage={page}
          params={searchParams}
        />
      </Container>
    </main>
  );
}
