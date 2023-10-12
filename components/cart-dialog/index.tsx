"use client";

import DialogContainer from "../dialog-container";
import DialogLayer from "../dialog-layer";
import { useCart } from "react-use-cart";
import MobileOnly from "../mobile-only";
import DialogLink from "../dialog-link";
import DialogCta from "../dialog-cta";
import Dialog from "../dialog";
import Image from "next/image";
import Icon from "../icon";
import "./style.scss";

export default function CartDialog() {
  const { items, isEmpty } = useCart();

  const variants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <div className="cart-dialog">
      <Dialog ariaLabel="cart dialog">
        <DialogCta>
          <Icon name="shopping-cart" title="shopping cart" />
        </DialogCta>
        <DialogLayer style={{ zIndex: -1 }}></DialogLayer>
        <DialogContainer variants={variants}>
          <MobileOnly>
            <DialogCta className="close">
              <Icon name="close" title="close" />
            </DialogCta>
          </MobileOnly>
          {!isEmpty ? (
            <>
              <ul>
                {items.map(({ product, color }: any) => (
                  <li key={product.id}>
                    <Image
                      src={`/images/products/${product.image}`}
                      alt={product.name}
                      width={60}
                      height={60}
                    />
                    <div className="wrapper">
                      <p>{product.name}</p>
                      <p>
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
                        <span className="price">{product.price} تومان</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <DialogLink href="/cart" className="more">
                مشاهده سبد خرید
              </DialogLink>
            </>
          ) : (
            <div className="empty-cart">سبد خرید شما خالی است</div>
          )}
        </DialogContainer>
      </Dialog>
    </div>
  );
}
