"use client";

import DialogContext from "@context/dialogContext";
import {  useState } from "react";

interface Props {
  children: React.ReactNode;
  ariaLabel: string;
}

export default function Dialog({ children, ariaLabel }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, ariaLabel }}>
      {children}
    </DialogContext.Provider>
  );
}
