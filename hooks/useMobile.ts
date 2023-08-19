import { useEffect, useState } from "react";

export default function useMobile() {
  const [isMobile, setIsMobile] = useState(false);

  function myFunction(x: any) {
    if (x.matches) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }
  var x = window.matchMedia("(max-width: 1160px)");
  x.addEventListener("change", myFunction);

  useEffect(() => {
    myFunction(x);
  }, []);

  return isMobile;
}
