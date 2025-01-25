import Icon from "@/components/general/icon";
import { product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import "./styles.scss";

interface Props {
  product: product;
}

export default function ProductCard({ product }: Props) {
  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`}>
        <Image
          src={`/images/products/${product.image}`}
          alt={product.name as string}
          height={200}
          width={200}
        />
      </Link>
      <h3>{product.name}</h3>
      <div className="info">
        <strong>{product.price} تومان</strong>
        <button type="button" className="btn cart">
          <Icon name="cart" />
        </button>
      </div>
    </div>
  );
}
