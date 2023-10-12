"use client";

import { usePathname } from "next/navigation";
import DialogLink from "../dialog-link";
import DialogCta from "../dialog-cta";
import Icon from "../icon";
import "./style.scss";

const navLinks = [
  { href: "/", name: "صفحه اصلی" },
  { href: "/shop", name: "فروشگاه" },
  { href: "/cart", name: "سبد خرید" },
  { href: "/admin", name: "پنل مدریت" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="main-nav">
      <DialogCta className="close-menu">
        <Icon title="close Navigation" name="close" />
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
