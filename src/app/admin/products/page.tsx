import AdminShowProducts from "@components/product/admin-show-products";
import getProducts from "@server-actions/product/filterProducts";
import FilterProducts from "@components/filters/filter-products";
import SortProducts from "@components/product/sort-products";
import MdContainer from "@components/general/md-container";
import Pagination from "@components/widgets/pagination";
import Button from "@components/general/button";
import "./style.scss";

export default async function Products({
  searchParams,
}: {
  searchParams?: any;
}) {
  const take = 12;
  const page = Number.parseInt(searchParams?.page) || 0;
  const { products, totalProduct } = await getProducts({
    page,
    take,
    searchParams,
  });

  const totalPages = Math.round(totalProduct / take);
  const pathname = "/admin/products";

  return (
    <main className="admin-products">
      <MdContainer>
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
      </MdContainer>
    </main>
  );
}
