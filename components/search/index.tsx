"use client";

import "./style.scss";
import Button from "../button";
import { useState } from "react";
import SearchResults from "@components/search-results";
import useSearch from "@hooks/useSearch";

async function searchProducts(value: string) {
  const res = await fetch(`/api/searchProduct?search=${value}`);
  return res;
}

export default function SearchForm() {
  useSearch();

  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  const handleChagne = ({ target }: { target: any }) => {
    const value = target.value;
    if (value) {
      setValue(value);
    }
    searchProducts(value)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
      });
  };

  return (
    <div className="search">
      <Button className="icon-button">
        <svg aria-hidden="true">
          <use href="#search" />
        </svg>
      </Button>
      <div className="input-group">
        <svg aria-hidden="true">
          <use href="#search" />
        </svg>
        <input type="search" onChange={handleChagne} />
      </div>
      <SearchResults results={data} searchValue={value} />
    </div>
  );
}
