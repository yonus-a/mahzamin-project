"use client";

import Dialog from "@components/dialog";
import DialogCta from "@components/dialog-cta";
import DialogContainer from "@components/dialog-container";
import DialogLayer from "@components/dialog-layer";
import MobileOnly from "@components/mobile-only";
import DialogLink from "@components/dialog-link";
import { useCart } from "react-use-cart";
import Image from "next/image";
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
          <svg>
            <title>shopping cart</title>
            <use href="#shopping-cart" />
          </svg>
        </DialogCta>
        <DialogLayer style={{ zIndex: -1 }}></DialogLayer>
        <DialogContainer variants={variants}>
          <MobileOnly>
            <DialogCta className="close">
              <svg>
                <title>close</title>
                <use href="#close" />
              </svg>
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
