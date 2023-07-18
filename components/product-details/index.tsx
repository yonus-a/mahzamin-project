import prisma from "@lib/prisma";
import React from "react";
import "./style.scss";

interface Props {
  id: number;
}

export default async function ProductDetails({ id }: Props) {
  const details = await prisma.productDetail.findMany({
    where: {
      productId: id,
    },
  });

  return (
    <details className="product-details">
      <summary>مشخصات کامل</summary>
      <dl>
        {details.map(({ id, term, definition }, idx) => {
          var classnames = idx % 2 === 0 ? "color" : "";
          return (
            <React.Fragment key={id}>
              <dt className={classnames}>{term}</dt>
              <dd className={classnames}>{definition}</dd>
            </React.Fragment>
          );
        })}
      </dl>
    </details>
  );
}
