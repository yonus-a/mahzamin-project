import getProducts from "@server-actions/product/filterProducts";
import ShopTopSection from "@components/product/shop-top-section";
import ShowProducts from "@components/product/showProducts";
import Pagination from "@components/widgets/pagination";
import Container from "@components/general/container";
import getFilterData from "@utils/getFilterData";

interface Props {
  searchParams?: any;
}

export default async function Shop({ searchParams }: Props) {
  const filterData = getFilterData(20, searchParams);
  const { products, totalProduct } = await getProducts({
    ...filterData,
    select: {
      id: true,
      name: true,
      image: true,
    },
  });

  const totalPages = Math.round(totalProduct / filterData.take);

  return (
    <main>
      <Container>
        <ShopTopSection
          currentPage={filterData.page}
          totalProducts={totalProduct}
          totalPages={totalPages}
        />
        <ShowProducts products={products} />
        <Pagination
          currentPage={filterData.page}
          totalPages={totalPages}
          params={searchParams}
          pathname="/shop"
        />
      </Container>
    </main>
  );
}
