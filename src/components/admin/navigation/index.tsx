"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/admin/add-product", text: "اضافه کردن محصول" },
  { href: "/admin/products", text: "محصولات" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul role="menubar">
        {links.map(({ href, text }) => {
          const isActive = pathname === href;

          return (
            <li role="none" key={href}>
              <Link
                href={href}
                role="menuitem"
                className={isActive ? "active" : ""}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
