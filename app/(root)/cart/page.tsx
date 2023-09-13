"use client";

import Container from "@components/container";
import CartItems from "@components/cart-items";
import Bill from "@components/bill";
import { useCart } from "react-use-cart";
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
