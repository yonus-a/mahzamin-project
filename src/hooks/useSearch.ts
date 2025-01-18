import { useEffect } from "react";

export default function useSearch() {
  useEffect(() => {
    const search = document.querySelector(".search");
    const searchInput = <HTMLInputElement>(
      search?.querySelector("input[type='search']")
    );

    search?.addEventListener("click", ({ target }) => {
      if ((target as HTMLElement).closest("a")) {
        var nativeInputValueSetter = Object.getOwnPropertyDescriptor(
          window.HTMLInputElement.prototype,
          "value"
        )?.set;
        nativeInputValueSetter?.call(searchInput, "");

        var ev2 = new Event("input", { bubbles: true });
        searchInput.dispatchEvent(ev2);
      }
    });
  }, []);
}
