"use client";

import UpdateQuantity from "../../widgets/update-quantity";
import SelectColor from "../../select-color";
import { useCart } from "react-use-cart";
import Button from "../../general/button";
import { useState } from "react";
import Link from "next/link";
import "./style.scss";

interface Props {
  product: any;
}

export default function ProductForm({ product }: Props) {
  const { addItem, inCart, getItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(product.product_color[0]);

  // get cart quantity for initialize quantity
  const cartQuantity = getItem(product.id)?.quantity;
  const [quantity, setQuantity] = useState(cartQuantity || 1);

  const handleChangeColor = (color: any) => {
    setSelectedColor(color);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        // color: selectedColor,
        product,
      },
      quantity
    );
  };

  return (
    <form className="add-to-cart" onSubmit={handleSubmit}>
      <SelectColor
        onColorChange={handleChangeColor}
        colors={product.product_color}
        selectedColor={selectedColor}
      />
      <strong>{product.price} تومان</strong>
      <div className="flex-wrapper">
        <UpdateQuantity
          quantity={quantity}
          setQuantity={setQuantity}
          itemId={product.id}
        />
        {!inCart(product.id) ? (
          <Button className="primary-btn" type="submit">
            افزودن به سبد خرید
          </Button>
        ) : (
          <Link className="primary-btn" href="/cart">
            مشاهده سبد خرید
          </Link>
        )}
      </div>
    </form>
  );
}
