"use client";

import Image from "next/image";
import DialogLink from "../dialog-link";
import "./style.scss";

interface Props {
  searchValue: string;
  results: any;
  className?: string;
}

export default function SearchResults({
  results,
  searchValue,
  className,
}: Props) {
  if (!results?.length) return null;

  return (
    <div className={`search-results ${className}`}>
      <ul>
        {results.map((result: any) => (
          <li key={result.id}>
            <DialogLink href={`/product/${result.id}`}>
              <Image
                src={`/images/products/${result.image}`}
                width={100}
                height={100}
                alt=""
              />
              {result.name}
            </DialogLink>
          </li>
        ))}
      </ul>
      {results.length > 4 ? (
        <DialogLink href={`/shop?search=${searchValue}`} className="more">
          نمایش بیشتر
          <svg aria-hidden="true">
            <use href="#chevron-left" />
          </svg>
        </DialogLink>
      ) : (
        ""
      )}
    </div>
  );
}
