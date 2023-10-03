"use client";

import DialogContext from "@context/dialogContext";
import { useMemo, useState } from "react";

interface Props {
  children: React.ReactNode;
  ariaLabel: string;
  onClose?: () => void | undefined;
  close?: boolean;
  open?: boolean;
  show?: boolean;
}

export default function Dialog({
  children,
  ariaLabel,
  onClose,
  show = false,
  open,
  close,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const closeDialog = () => {
    setIsOpen(false);
    onClose?.();
  };

  useMemo(() => {
    setIsOpen(show);
    if (open) setIsOpen(true);
    if (close) setIsOpen(false);
  }, [open, close, show]);

  return (
    <DialogContext.Provider
      value={{ isOpen, closeDialog, ariaLabel, setIsOpen }}
    >
      {children}
    </DialogContext.Provider>
  );
}
