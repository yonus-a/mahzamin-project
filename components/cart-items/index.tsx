import Image from "next/image";
import Counter from "@components/counter";
import { useCart } from "react-use-cart";
import "./style.scss";

export default function CartItems({ items }: any) {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="cart-items">
      {items.map(({ product, color, id, quantity }: any) => (
        <div className="item" key={product.id}>
          <Image
            src={`/images/products/${product.image}`}
            alt={product.name}
            width={100}
            height={100}
          />
          <div className="col-right">
            <h3>{product.name}</h3>
            <div className="details">
              <span className="color">
                <span
                  style={
                    {
                      "--bg-color": color.code,
                    } as React.CSSProperties
                  }
                ></span>
                {color.name}
              </span>
              <span className="guarantee">
                <svg aria-hidden="true">
                  <use href="#verified" />
                </svg>
                اصالت کالا و سلامتی فیزیکی
              </span>
            </div>
            <div className="price">
              <Counter
                onIncrement={() => updateItemQuantity(id, quantity + 1)}
                onDecrement={() => updateItemQuantity(id, quantity - 1)}
                onDelete={() => removeItem(id)}
                showDelete={quantity <= 1}
                count={quantity}
              />
              <strong>{product.price} ریال</strong>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
