"use client";

import DialogContext from "@context/dialogContext";
import { useState } from "react";

interface Props {
  children: React.ReactNode;
  ariaLabel: string;
  open?: boolean;
}

export default function Dialog({ children, ariaLabel, open = false }: Props) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <DialogContext.Provider value={{ isOpen, setIsOpen, ariaLabel }}>
      {children}
    </DialogContext.Provider>
  );
}
