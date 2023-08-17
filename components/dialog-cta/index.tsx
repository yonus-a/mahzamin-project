"use client";

import Button from "../button";
import DialogContext from "@context/dialogContext";
import { useContext } from "react";

interface Props {
  children: React.ReactNode;
  type?: string;
}

export default function DialogCta({ children, type }: Props) {
  const { isOpen, setIsOpen } = useContext<any>(DialogContext);

  return (
    <Button type={type} onClick={() => setIsOpen(!isOpen)}>
      {children}
    </Button>
  );
}
