"use client";

import { useState } from "react";
import Button from "../button";
import "./style.scss";

interface Props {
  productPrice: number;
}

export default function ProductPriceCalculator({ productPrice }: Props) {
  var [price, setPrice] = useState(productPrice);
  var [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
    setPrice(price + productPrice);
  };

  const handleDecrement = () => {
    if (count - 1 > 0) {
      setCount(count - 1);
      setPrice(price - productPrice);
    }
  };

  return (
    <div className="product-price-calculator">
      <strong>{price} تومان</strong>
      <div className="input-group">
        <div className="counter">
          <Button type="button" onClick={handleIncrement}>
            +
          </Button>
          {count}
          <Button type="button" onClick={handleDecrement}>
            -
          </Button>
          <input type="hidden" name="count" value={count} />
        </div>
        <Button className="submit" type="submit">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
}
