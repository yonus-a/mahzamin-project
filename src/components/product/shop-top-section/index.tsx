import SortProducts from "../sort-products";
import FilterProducts from "../../filters/filter-products";
import Icon from "../../general/icon";
import "./style.scss";

interface Props {
  currentPage: number;
  totalPages: number;
  totalProducts: number;
}

export default function ShopTopSection({
  currentPage,
  totalPages,
  totalProducts,
}: Props) {
  return (
    <div className="shop-top-section">
      <div className="right-col">
        <h2>
          <Icon name="shop" />
          فروشگاه
        </h2>
        <p>
          نمایش {currentPage + 1}&#8209;{totalPages} از {totalProducts} نتیجه
        </p>
      </div>
      <div className="left-col">
        <FilterProducts />
        <SortProducts pathname="/shop" />
      </div>
    </div>
  );
}
