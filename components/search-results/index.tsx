"use client";

import Image from "next/image";
import Link from "next/link";
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
            <Link href={`/product/${result.id}`}>
              <Image
                src={`/images/products/${result.image}`}
                width={100}
                height={100}
                alt=""
              />
              {result.name}
            </Link>
          </li>
        ))}
      </ul>
      {results.length > 4 ? (
        <Link href={`/shop?search=${searchValue}`} className="more">
          نمایش بیشتر
          <svg aria-hidden="true">
            <use href="#chevron-left" />
          </svg>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
