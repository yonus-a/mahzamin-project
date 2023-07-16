import Link from "next/link";

export default function ProductPagination({ count }: { count: number }) {
  return (
    <div className="product-pagination">
      {
        <ul>
          {Array.from({ length: count }, (_, idx: number) => (
            <li key={idx}>
              <Link href={`/shop/${idx + 1}`}>{idx + 1}</Link>
            </li>
          ))}
        </ul>
      }
    </div>
  );
}
