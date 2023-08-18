"use client";

import DialogContext from "@context/dialogContext";
import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
  variants?: { initial: {}; animate: {}; exit?: {} };
}

export default function DialogContainer({ children, variants }: Props) {
  const { isOpen, ariaLabel } = useContext<any>(DialogContext);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="dialog"
          role="dialog"
          aria-modal="true"
          aria-label={ariaLabel}
          variants={variants}
          initial="initial"
          animate="animate"
          exit={variants?.exit ? "exit" : "initial"}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
