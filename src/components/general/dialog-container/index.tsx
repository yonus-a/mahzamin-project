"use client";

import { motion, AnimatePresence } from "framer-motion";
import toggleScrollbar from "@utils/togggleScrollbar";
import DialogContext from "@context/dialogContext";
import { useContext, useEffect } from "react";
import "./style.scss";

interface Props {
  children: React.ReactNode;
  variants?: { initial: {}; animate: {}; exit?: {} };
  takeAllSpace?: boolean;
  kickOff?: boolean;
}

export default function DialogContainer({
  children,
  variants,
  takeAllSpace,
  kickOff,
}: Props) {
  const { isOpen, ariaLabel } = useContext<any>(DialogContext);

  useEffect(() => {
    if (takeAllSpace) toggleScrollbar(isOpen);
  }, [isOpen, takeAllSpace]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          className={`dialog ${takeAllSpace ? "take-all-space" : ""}`}
          aria-label={ariaLabel}
          variants={variants}
          initial="initial"
          animate="animate"
          exit={variants?.exit ? "exit" : "initial"}
          transition={kickOff ? { ease: "easeInOut" } : {}}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
