"use client";

import DialogContainer from "../../general/dialog-container";
import DialogLink from "../../general/dialog-link";
import DialogCta from "../../general/dialog-cta";
import Dialog from "../../general/dialog";
import Icon from "../../general/icon";
import "./style.scss";

interface Props {
  pathname: string;
}

export default function SortProducts({ pathname }: Props) {
  const links = [
    { href: `${pathname}?sort=maxPrice`, name: "گرانترین ها" },
    { href: `${pathname}?sort=minPrice`, name: "ارزان ترین ها" },
    { href: `${pathname}?sort=old`, name: "قدیمی ترین ها" },
    { href: `${pathname}?sort=new`, name: "جدید ترین ها" },
    { href: `${pathname}`, name: "پرفروش ترین ها" },
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
            <Icon name="chevron-down" />
          </span>
          <span className="mobile-only">
            <Icon name="sort" />
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
