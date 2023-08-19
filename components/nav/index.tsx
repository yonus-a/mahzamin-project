"use client";

import { usePathname } from "next/navigation";
import DialogCta from "@components/dialog-cta";
import { DialogLink } from "@components/dialog-link";
import "./style.scss";

const navLinks = [
  { href: "/", name: "صفحه اصلی" },
  { href: "/shop", name: "فروشگاه" },
  { href: "/cart", name: "سبد خرید" },
  { href: "/acount", name: "حساب کاربری من" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav">
      <DialogCta className="close-menu">
        <svg>
          <title>close Navigation</title>
          <use href="#close" />
        </svg>
      </DialogCta>
      <ul role="menubar" className="menubar">
        {navLinks.map(({ href, name }) => {
          var isActive = pathname === href;

          return (
            <li role="none" key={name}>
              <DialogLink
                href={href}
                role="menuitem"
                className={isActive ? "active" : ""}
              >
                {name}
              </DialogLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
