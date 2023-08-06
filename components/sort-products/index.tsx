"use client";

import Button from "../button";
import Link from "next/link";
import { useState } from "react";
import "./style.scss";

const links = [
  { href: "/shop?sort=maxPrice", name: "گرانترین ها" },
  { href: "/shop?sort=minPrice", name: "ارزان ترین ها" },
  { href: "/shop?sort=old", name: "قدیمی ترین ها" },
  { href: "/shop?sort=new", name: "جدید ترین ها" },
  { href: "/shop", name: "پرفروش ترین ها" },
];

export default function SortProducts() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sort-products">
      <Button
        aria-controls="sortMenu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
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
      </Button>
      <ul id="sortMenu" className={open ? "" : "hidden"}>
        {links.map(({ href, name }) => (
          <li key={name}>
            <Link href={href} onClick={() => setOpen(false)}>
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
