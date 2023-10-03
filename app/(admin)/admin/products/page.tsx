import AdminContainer from "@components/admin-container";
import AdminShowProducts from "@components/admin-show-products";
import Pagination from "@components/pagination";
import getProducts from "@prisma-actions/getProducts";
import "./style.scss";
import FilterProducts from "@components/filter-products";
import SortProducts from "@components/sort-products";
import Button from "@components/button";

export default async function Products({
  searchParams,
}: {
  searchParams?: any;
}) {
  const take = 12;
  const page = Number.parseInt(searchParams?.page) || 0;
  const { products, totalProduct } = await getProducts(
    page,
    take,
    searchParams
  );
  const totalPages = Math.round(totalProduct / take);
  const pathname = "/admin/products";

  return (
    <main className="admin-products">
      <AdminContainer>
        <div className="admin-products-top-section">
          <form className="search-form" method="get">
            <input type="search" name="search" placeholder="جستجو..." />
            <Button type="submit">جستجو</Button>
          </form>
          <div className="right-side">
            <FilterProducts />
            <SortProducts pathname={pathname} />
          </div>
        </div>
        <AdminShowProducts products={products} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          params={searchParams}
          pathname={pathname}
        />
      </AdminContainer>
    </main>
  );
}
