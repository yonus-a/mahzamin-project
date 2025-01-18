"use client";

import DialogContainer from "../../general/dialog-container";
import DialogLayer from "../../general/dialog-layer";
import SearchResults from "../search-results";
import DialogCta from "../../general/dialog-cta";
import MobileOnly from "../../general/mobile-only";
import Dialog from "../../general/dialog";
import Icon from "../../general/icon";
import { useState } from "react";
import PcOnly from "../../general/pc-only";
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

    if (value === "") return setResult([]);

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
          <Icon name="search" />
          <input
            onChange={handleChagne}
            value={searchValue}
            placeholder="جستجو"
          />
        </div>
        <Dialog
          ariaLabel="search result"
          onClose={reset}
          close={searchValue === ""}
          open={result.length > 0}
        >
          <DialogLayer style={{ zIndex: -1 }}></DialogLayer>
          <DialogContainer variants={pc_variants}>
            <SearchResults results={result} searchValue={searchValue} />
          </DialogContainer>
        </Dialog>
      </PcOnly>
      <MobileOnly>
        <Dialog ariaLabel="search" onClose={reset}>
          <DialogCta className="icon-button">
            <Icon name="search" />
          </DialogCta>
          <DialogContainer takeAllSpace variants={mobile_variants} kickOff>
            <div className="input-group">
              <DialogCta className="icon-button" onClick={reset}>
                <Icon name="arrow-right" title="close" />
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
