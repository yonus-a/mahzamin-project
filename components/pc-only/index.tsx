import { useEffect, useState } from "react";

export default function PcOnly({ children }: { children: React.ReactNode }) {
  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    function handleChange(query: any) {
      if (query.matches) {
        setIsPc(true);
      } else {
        setIsPc(false);
      }
    }

    var query = window.matchMedia("(min-width: 1160px)");
    query.addEventListener("change", handleChange);
    handleChange(query);
  }, []);

  return <>{isPc && <div className="pc-only">{children}</div>}</>;
}
