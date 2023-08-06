import Link from "next/link";
import "./style.scss";

export default function ProductPagination({
  totalPages,
  currentPage,
  params,
}: {
  totalPages: number;
  currentPage: number;
  params: any;
}) {
  return (
    <div className="product-pagination">
      <ul>
        {Array.from({ length: totalPages }, (_, idx: number) => {
          const classnames = `${idx === currentPage ? "active" : ""}`;
          var href = {};

          if (idx > 0) {
            href = { pathname: "/shop", query: { ...params, page: idx } };
          } else {
            delete params.page;
            href = { pathname: "/shop", query: params };
          }

          return (
            <li key={idx}>
              <Link href={href} className={classnames}>
                {idx + 1}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
