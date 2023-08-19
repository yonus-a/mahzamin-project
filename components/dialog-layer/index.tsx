"use client";

import DialogContext from "@context/dialogContext";
import toggleScrollbar from "@utils/togggleScrollbar";
import { AnimatePresence, MotionStyle, motion } from "framer-motion";
import { useContext, useEffect } from "react";
import "./style.scss";

interface Props {
  children?: React.ReactNode;
  style?: MotionStyle;
  onClose: () => void | undefined;
}
export default function DialogLayer({ children, style, onClose }: Props) {
  const { isOpen, setIsOpen } = useContext<any>(DialogContext);

  const handleClick = ({ target }: any) => {
    if (target.classList.contains("dialog-layer")) {
      onClose?.();
      setIsOpen(false);
    }
  };

  useEffect(() => {
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
