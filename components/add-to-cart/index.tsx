"use client";

import SelectColor from "../select-color";
import UpdateQuantity from "../updateQuantity";
import { useState } from "react";
import { useCart } from "react-use-cart";
import Button from "@components/button";
import Link from "next/link";
import "./style.scss";

interface Props {
  colors: any;
  product: any;
}

export default function ProductForm({ colors, product }: Props) {
  const { addItem, inCart, getItem } = useCart();
  const [color, setColor] = useState(colors[0]);
  // get cart quantity for initialize quantity
  const cartQuantity = getItem(product.id)?.quantity;
  const [quantity, setQuantity] = useState(cartQuantity || 1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addItem(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        product,
        color,
      },
      quantity
    );
  };

  return (
    <form className="add-to-cart" onSubmit={handleSubmit}>
      <SelectColor colors={colors} color={color} setColor={setColor} />
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
