import React from "react";
import "./style.scss";

interface Props {
  details: any;
}

export default function ProductDetails({ details }: Props) {
  return (
    <details className="product-details">
      <summary>مشخصات کامل</summary>
      <dl>
        {details.map(({ id, term, definition }: any, idx: any) => {
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
