"use client";

import DialogContainer from "../dialog-container";
import DialogCta from "../dialog-cta";
import Dialog from "../dialog";
import DialogLink from "@components/dialog-link";
import "./style.scss";

export default function SortProducts({ pathname }: { pathname: string }) {
  const links = [
    { href: `${pathname}?sort=maxPrice`, name: "گرانترین ها" },
    { href: `${pathname}/shop?sort=minPrice`, name: "ارزان ترین ها" },
    { href: `${pathname}/shop?sort=old`, name: "قدیمی ترین ها" },
    { href: `${pathname}/shop?sort=new`, name: "جدید ترین ها" },
    { href: `${pathname}/shop`, name: "پرفروش ترین ها" },
  ];

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
                <DialogLink href={href}>{name}</DialogLink>
              </li>
            ))}
          </ul>
        </DialogContainer>
      </Dialog>
    </div>
  );
}
