"use client";

import DialogContext from "@context/dialogContext";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect } from "react";

import "./style.scss";

interface Props {
  children: React.ReactNode;
}
export default function DialogLayer({ children }: Props) {
  const { isOpen, setIsOpen } = useContext<any>(DialogContext);

  const handleClick = ({ target }: any) => {
    if (target.classList.contains("dialog-layer")) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog-layer"
          onClick={handleClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
