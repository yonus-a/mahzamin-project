"use client";

import DialogLink from "../../general/dialog-link";
import Icon from "../../general/icon";
import Image from "next/image";
import "./style.scss";

interface Props {
  searchValue: string;
  className?: string;
  results: any;
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
                alt={result.name}
                width={100}
                height={100}
              />
              {result.name}
            </DialogLink>
          </li>
        ))}
      </ul>
      {results.length > 4 ? (
        <DialogLink href={`/shop?search=${searchValue}`} className="more">
          نمایش بیشتر
          <Icon name="chevron-left" />
        </DialogLink>
      ) : (
        ""
      )}
    </div>
  );
}
