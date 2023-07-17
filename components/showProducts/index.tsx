import Image from "next/image";
import Link from "next/link";
import "./style.scss";
import AnimatedItem from "@components/animated-item";

interface Product {
  id: number;
  image: string;
  name: string;
  price: number
}

export default function ShowProducts({ products }: { products: any }) {
  return (
    <ul className="products">
      {products.map((product: Product) => (
        <AnimatedItem key={product.id} animation="animate__fadeIn" delay={200}>
          <Link href="#" >
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
