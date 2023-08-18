"use client";

import DialogContainer from "../dialog-container";
import DialogCta from "../dialog-cta";
import Dialog from "../dialog";
import Link from "next/link";
import "./style.scss";

const links = [
  { href: "/shop?sort=maxPrice", name: "گرانترین ها" },
  { href: "/shop?sort=minPrice", name: "ارزان ترین ها" },
  { href: "/shop?sort=old", name: "قدیمی ترین ها" },
  { href: "/shop?sort=new", name: "جدید ترین ها" },
  { href: "/shop", name: "پرفروش ترین ها" },
];

export default function SortProducts() {
  const variants = {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 0, opacity: 0 },
  };

  return (
    <div className="sort-products">
      <Dialog ariaLabel="sort Product">
        <DialogCta>
          <span className="pc-only">
            مرتب سازی بر اساس
            <svg>
              <use href="#chevron-down" />
            </svg>
          </span>
          <span className="mobile-only">
            <svg>
              <use href="#sort" />
            </svg>
          </span>
        </DialogCta>
        <DialogContainer variants={variants}>
          <ul>
            {links.map(({ href, name }) => (
              <li key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
        </DialogContainer>
      </Dialog>
    </div>
  );
}
