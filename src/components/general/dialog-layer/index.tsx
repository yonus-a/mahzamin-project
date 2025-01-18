"use client";

import { AnimatePresence, MotionStyle, motion } from "framer-motion";
import toggleScrollbar from "@utils/togggleScrollbar";
import DialogContext from "@context/dialogContext";
import { useContext, useMemo } from "react";
import "./style.scss";

interface Props {
  children?: React.ReactNode;
  style?: MotionStyle;
}
export default function DialogLayer({ children, style }: Props) {
  const { isOpen, closeDialog } = useContext<any>(DialogContext);

  const handleClick = ({ target }: any) => {
    if (target.classList.contains("dialog-layer")) {
      closeDialog();
    }
  };

  useMemo(() => {
    toggleScrollbar(isOpen);
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
          style={style}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
