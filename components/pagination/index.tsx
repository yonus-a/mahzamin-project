import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import "./style.scss";

interface Props {
  totalPages: number;
  currentPage: number;
  pathname: string;
  params: any;
}

export default function Pagination({
  totalPages,
  currentPage,
  params,
  pathname,
}: Props) {
  return (
    <div className="pagination">
      <ul>
        {Array.from({ length: totalPages }, (_, idx: number) => {
          const classnames = `${idx === currentPage ? "active" : ""}`;
          var href = {};

          if (idx > 0) {
            href = { pathname, query: { ...params, page: idx } };
          } else {
            delete params.page;
            href = { pathname, query: params };
          }

          return (
            <li key={uuidv4()}>
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
