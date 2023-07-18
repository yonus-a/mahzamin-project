import Button from "../button";
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
          <svg>
            <use href="#shop" />
          </svg>
          فروشگاه
        </h2>
        <p>
          نمایش {currentPage + 1}&#8209;{totalPages} از {totalProducts} نتیجه
        </p>
      </div>
      <div className="left-col">
        <Button>فیتر</Button>
        <Button>
          <span className="pc-only">
            مرتب سازی بر اساس
            <svg>
              <use href="#chevron-down" />
            </svg>
          </span>
          <span className="mobile-only">
            <svg>
              <use href="#sort" />
            </svg>
          </span>
        </Button>
      </div>
    </div>
  );
}
