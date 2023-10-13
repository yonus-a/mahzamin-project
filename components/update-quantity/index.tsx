"use client";

import { useCart } from "react-use-cart";
import Counter from "../counter";

interface Props {
  quantity: number;
  setQuantity: any;
  itemId: string;
}

export default function UpdateQuantity({
  quantity,
  setQuantity,
  itemId,
}: Props) {
  const { updateItemQuantity, removeItem, getItem, inCart } = useCart();
  const cartQuantity = getItem(itemId)?.quantity;

  return (
    <>
      {!inCart(itemId) ? (
        <Counter
          onIncrement={() => setQuantity(quantity + 1)}
          onDecrement={() => {
            quantity > 1 && setQuantity(quantity - 1);
          }}
          count={quantity}
        />
      ) : (
        <Counter
          onIncrement={() => updateItemQuantity(itemId, cartQuantity + 1)}
          onDecrement={() => updateItemQuantity(itemId, cartQuantity - 1)}
          onDelete={() => {
            removeItem(itemId);
            setQuantity(1);
          }}
          showDelete={cartQuantity <= 1}
          count={cartQuantity}
        />
      )}
    </>
  );
}
