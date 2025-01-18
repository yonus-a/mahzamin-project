import AnimatedItem from "../../general/animated-item";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

interface Props {
  products: any;
}

export default function ShowProducts({ products }: Props) {
  return (
    <ul className="products">
      {products.length <= 0 && <h1 className="not-found">موردی یافت نشد !</h1>}
      {products.map((product: any) => (
        <AnimatedItem key={product.id} animation="animate__fadeIn" delay={200}>
          <Link href={`/product/${product.id}`}>
            <Image
              src={`/images/products/${product.image}`}
              alt={product.name}
              width={200}
              height={200}
            />
            <p>{product.name}</p>
          </Link>
        </AnimatedItem>
      ))}
    </ul>
  );
}
