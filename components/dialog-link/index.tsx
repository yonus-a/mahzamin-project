import DialogContext from "@context/dialogContext";
import { useContext } from "react";
import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export function DialogLink({ children, href, className = "" }: Props) {
  const { closeDialog } = useContext<any>(DialogContext);

  return (
    <Link href={href} className={className} onClick={closeDialog}>
      {children}
    </Link>
  );
}
