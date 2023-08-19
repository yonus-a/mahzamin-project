"use client";

import DialogContainer from "../dialog-container";
import SearchResults from "../search-results";
import DialogLayer from "../dialog-layer";
import MobileOnly from "../mobile-only";
import DialogCta from "../dialog-cta";
import Dialog from "../dialog";
import PcOnly from "../pc-only";
import { useState } from "react";
import "./style.scss";

async function searchProducts(value: string) {
  return await fetch(`/api/searchProduct?search=${value}`);
}

export default function SearchForm() {
  const [result, setResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const mobile_variants = {
    initial: { y: "100vh" },
    animate: { y: 0 },
  };

  const pc_variants = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const reset = () => {
    setSearchValue("");
    setResult([]);
  };

  const handleChagne = ({ target }: any) => {
    const value = target.value;
    setSearchValue(value);

    if (value == "") return setResult([]);

    searchProducts(value)
      .then((res) => res.json())
      .then((data) => {
        setResult(data.results);
      });
  };

  return (
    <div className="search">
      <PcOnly>
        <div className="input-group">
          <svg aria-hidden="true">
            <use href="#search" />
          </svg>
          <input onChange={handleChagne} value={searchValue} />
        </div>
        <Dialog ariaLabel="search result">
          <DialogCta clicked={result.length > 0}></DialogCta>
          <DialogLayer onClose={reset} style={{ zIndex: -1 }}></DialogLayer>
          <DialogContainer variants={pc_variants}>
            <SearchResults results={result} searchValue={searchValue} />
          </DialogContainer>
        </Dialog>
      </PcOnly>
      <MobileOnly>
        <Dialog ariaLabel="search">
          <DialogCta className="icon-button">
            <svg aria-hidden="true">
              <use href="#search" />
            </svg>
          </DialogCta>
          <DialogContainer takeAllSpace variants={mobile_variants} kickOff>
            <div className="input-group">
              <DialogCta className="icon-button" onClick={reset}>
                <svg>
                  <title>close</title>
                  <use href="#arrow-right" />
                </svg>
              </DialogCta>
              <input onChange={handleChagne} placeholder="جستجو" />
            </div>
            <SearchResults results={result} searchValue={searchValue} />
          </DialogContainer>
        </Dialog>
      </MobileOnly>
    </div>
  );
}
