"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function PcOnly({ children }: Props) {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    function handleChange(query: any) {
      return query.matches ? setIsPc(true) : setIsPc(false);
    }

    var query = window.matchMedia("(min-width: 1160px)");
    query.addEventListener("change", handleChange);
    handleChange(query);
  }, [isPc]);

  return <>{isPc && <div className="pc-only">{children}</div>}</>;
}
