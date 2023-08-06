"use client";

import { usePathname } from "next/navigation";
import useMenu from "@hooks/useMenu";
import Button from "../button";
import Link from "next/link";
import "./style.scss";

const navLinks = [
  { href: "/", name: "صفحه اصلی" },
  { href: "/shop", name: "فروشگاه" },
  { href: "/cart", name: "سبد خرید" },
  { href: "/acount", name: "حساب کاربری من" },
];

export default function Nav() {
  const pathname = usePathname();
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
        {navLinks.map(({ href, name }) => {
          var isActive = pathname === href;

          return (
            <li role="none" key={name}>
              <Link
                href={href}
                role="menuitem"
                className={isActive ? "active" : ""}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
