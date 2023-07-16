import Image from "next/image";
import Link from "next/link";
import "./style.scss";

interface Product {
  id: number;
  image: string;
  name: string;
}

export default function ShowProducts({ products }: { products: any }) {
  return (
    <ul className="products">
      {products.map((product: Product) => (
        <li key={product.id}>
          <Link href="#">
            <Image
              src={`/images/products/${product.image}`}
              alt={product.name}
              width={200}
              height={200}
            />
            <p>{product.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
