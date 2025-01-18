"use client";

import { useEffect, useState } from "react";

interface Props {
  children: React.ReactNode;
}

export default function MobileOnly({ children }: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleChange(query: any) {
      return query.matches ? setIsMobile(true) : setIsMobile(false);
    }

    var query = window.matchMedia("(max-width: 1160px)");
    query.addEventListener("change", handleChange);
    handleChange(query);
  }, [isMobile]);

  return <>{isMobile && <div className="mobile-only">{children}</div>}</>;
}
