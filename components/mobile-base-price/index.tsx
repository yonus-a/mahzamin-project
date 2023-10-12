import AnimatedItem from "../animated-item";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const price = [
  { min: 0, max: 5000000, image: "mobile5.png", alt: "گوشی از 5 میلیون تومان" },
  {
    min: 5000000,
    max: 10000000,
    image: "mobile5-10.png",
    alt: "گوشی 5 تا 10 میلیون تومان",
  },
  {
    min: 10000000,
    max: 15000000,
    image: "mobile10-15.png",
    alt: "گوشی 10 تا 15 میلیون تومان",
  },
  {
    min: 15000000,
    max: 20000000,
    image: "mobile15-20.png",
    alt: "گوشی 15 تا 20 میلیون تومان",
  },
];

export default function MobileBasePrice() {
  return (
    <section className="mobile-base-price" aria-labelledby="mobileBasePrice">
      <div className="title">
        <h2 id="mobileBasePrice">گوشی بر اساس قیمت</h2>
        <span className="line"></span>
      </div>
      <ul>
        {price.map(({ min, max, image, alt }: any, idx: number) => {
          return (
            <AnimatedItem
              key={nanoid()}
              animation="animate__pulse"
              delay={idx * 200}
            >
              <Link href={`/shop?category=1&min=${min}&max=${max}`}>
                <Image
                  src={`/images/mobile-base-price/${image}`}
                  alt={alt}
                  width={200}
                  height={200}
                />
              </Link>
            </AnimatedItem>
          );
        })}
      </ul>
    </section>
  );
}
