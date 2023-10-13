import AnimatedItem from "../animated-item";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const categories = [
  { name: "laptop", image: "laptop.png", text: "لپتاب" },
  { name: "watch", image: "watch.png", text: "ساعت" },
  { name: "accessories", image: "mouse.png", text: "لوازم جانبی" },
  { name: "tablet", image: "tablet.png", text: "تبلت" },
  { name: "mobile", image: "phone.png", text: "موبایل" },
];

export default function ProductsCategorization() {
  return (
    <section
      className="products-categorization"
      aria-label="products categorization"
    >
      <ul>
        {categories.map(({ name, image, text }: any, idx: number) => {
          const delay = idx * 200;

          return (
            <AnimatedItem key={name} animation="animate__pulse" delay={delay}>
              <Link href={`/shop?category=${name}`}>
                <div className="image">
                  <Image
                    src={`/images/products-categorization/${image}`}
                    alt={name}
                    width={90}
                    height={90}
                  />
                </div>
                {text}
              </Link>
            </AnimatedItem>
          );
        })}
      </ul>
    </section>
  );
}
