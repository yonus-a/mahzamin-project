"use client";

import { useEffect } from "react";
import "./style.scss";

interface Props {
  msg: string;
  dropErr: () => void;
}

export default function Error({ msg, dropErr }: Props) {
  useEffect(() => {
    setTimeout(() => {
      dropErr();
    }, 2000);
  }, [msg, dropErr]);

  return (
    <div className="error">
      <svg>
        <title>Error</title>
        <use href="#error" />
      </svg>
      {msg}
    </div>
  );
}
