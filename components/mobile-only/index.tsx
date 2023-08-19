import { useEffect, useState } from "react";

export default function MobileOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function handleChange(query: any) {
      if (query.matches) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    }

    var query = window.matchMedia("(max-width: 1160px)");
    query.addEventListener("change", handleChange);
    handleChange(query);
  }, []);

  return <>{isMobile && <div className="mobile-only">{children}</div>}</>;
}
