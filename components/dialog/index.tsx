"use client";

import DialogContext from "@context/dialogContext";
import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
  ariaLabel: string;
  onClose?: () => void | undefined;
  close?: boolean;
  open?: boolean;
}

export default function Dialog({
  children,
  ariaLabel,
  onClose,
  close,
  open,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
    onClose?.();
  };

  useEffect(() => {
    if (open) setIsOpen(true);
    if (close) setIsOpen(false);
  }, [open, close]);

  return (
    <DialogContext.Provider
      value={{ isOpen, closeDialog, ariaLabel, setIsOpen }}
    >
      {children}
    </DialogContext.Provider>
  );
}
