"use client";

import CartItems from "@components/general/cart-items";
import Container from "@components/general/container";
import { useCart } from "react-use-cart";
import Bill from "@components/product/bill";
import "./style.scss";

export default function Cart() {
  const { isEmpty, items } = useCart();

  return (
    <main className="cart">
      <Container>
        <h1>سبد خرید</h1>
        {!isEmpty ? (
          <div className="grid-wrapper">
            <CartItems items={items} />
            <Bill items={items} />
          </div>
        ) : (
          <h2 className="empty-cart">سبد خرید شما خالی است !</h2>
        )}
      </Container>
    </main>
  );
}
