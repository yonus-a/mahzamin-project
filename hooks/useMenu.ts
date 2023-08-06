import { useEffect } from "react";

export default function useMenu() {
  useEffect(() => {
    var menuCta = document.querySelector(".menu-cta");
    var close = document.querySelector(".close-menu");
    var nav = document.querySelector(".main-nav");

    if (menuCta != null) {
      menuCta.addEventListener("click", () => {
        nav?.classList.remove("hidden");
      });
    }
    if (close != null) {
      close.addEventListener("click", () => {
        nav?.classList.add("hidden");
      });

      nav?.addEventListener("click", ({ target }) => {
        if ((target as HTMLElement).closest("a")) {
          (close as HTMLInputElement).click();
        }
      });
    }
  }, []);
}
