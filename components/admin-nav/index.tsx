"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/admin/update-product", text: "ویرایش محصول" },
  { href: "/add-product", text: "اضافه کردن محصول" },
];

export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul role="menubar">
        {links.map(({ href, text }) => {
          const isActive = pathname === href;

          return (
            <li role="none" key={text}>
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
