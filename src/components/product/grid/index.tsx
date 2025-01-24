import { ProductGridTypes } from "./type";
import Image from "next/image";
import Link from "next/link";
import "./styles.scss";

export default function ProductGrid({ products, title }: ProductGridTypes) {
  return (
    <section className="product-grid" aria-label="product grid">
      <h2>{title}</h2>
      <ul>
        {products.map((item) => (
          <li key={item.id}>
            <Link href={`/product/${item.id}`}>
              <Image
                src={`/images/products/${item.image}`}
                alt={item.name || ""}
                height={100}
                width={100}
              />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
