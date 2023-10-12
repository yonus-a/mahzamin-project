"use client";

import DialogContext from "@context/dialogContext";
import { useContext } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
  role?: string;
}

export default function DialogLink({
  className = "",
  children,
  role = "",
  href,
}: Props) {
  const { closeDialog } = useContext<any>(DialogContext);

  return (
    <Link href={href} className={className} onClick={closeDialog} role={role}>
      {children}
    </Link>
  );
}
