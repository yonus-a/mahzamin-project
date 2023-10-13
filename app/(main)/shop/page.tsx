import ShopTopSection from "@components/shop-top-section";
import getProducts from "@prisma-actions/getProducts";
import ShowProducts from "@components/showProducts";
import Pagination from "@components/pagination";
import Container from "@components/container";

interface Props {
  searchParams?: any;
}

export default async function Shop({ searchParams }: Props) {
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
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          params={searchParams}
          pathname="/shop"
        />
      </Container>
    </main>
  );
}
