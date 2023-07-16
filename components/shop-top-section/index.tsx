import Button from "../button";
import "./style.scss";

export default function ShopTopSection() {
  return (
    <div className="shop-top-section">
      <div className="right-col">
        <h2>
          <svg>
            <use href="#shop" />
          </svg>
          فروشگاه
        </h2>
        <p>نمایش </p>
      </div>
      <div className="left-col">
        <Button>فیتر</Button>
        <Button>مرتب سازی بر اساس</Button>
      </div>
    </div>
  );
}
