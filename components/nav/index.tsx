"use client";

import Link from "next/link";
import Button from "../button";
import useMenu from "@hooks/useMenu";
import "./style.scss";

export default function Nav() {
  useMenu();

  return (
    <nav className="main-nav hidden" id="main_nav">
      <Button
        className="close-menu"
        aria-label="Close Menu"
        aria-controls="main_nav"
      >
        <svg>
          <use href="#close" />
        </svg>
      </Button>
      <ul role="menubar" className="menubar">
        <li role="none">
          <Link href="/" role="menuitem" className="active">
            صفحه اصلی
          </Link>
        </li>
        <li role="none">
          <Link href="/shop" role="menuitem">
            فروشگاه
          </Link>
        </li>
        <li role="none">
          <Link href="/" role="menuitem">
            سبد خرید
          </Link>
        </li>
        <li role="none">
          <Link href="/" role="menuitem">
            حساب کاربری من
          </Link>
        </li>
      </ul>
    </nav>
  );
}
