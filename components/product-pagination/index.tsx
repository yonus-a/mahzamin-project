import Link from "next/link";
import "./style.scss";

export default function ProductPagination({
  totalPages,
  currentPage,
}: {
  totalPages: number;
  currentPage: number;
}) {
  return (
    <div className="product-pagination">
      <ul>
        {Array.from({ length: totalPages }, (_, idx: number) => {
          const href = idx > 0 ? `/shop?page=${idx}` : "/shop";
          const classnames = `${idx === currentPage ? "active" : ""}`;

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
