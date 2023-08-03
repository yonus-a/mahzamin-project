import Image from "next/image";
import AnimatedItem from "../animated-item";
import Link from "next/link";
import "./style.scss";

export default function ProductsCategorization() {
  return (
    <section
      className="products-categorization"
      aria-label="products categorization"
    >
      <ul>
        <AnimatedItem animation="animate__pulse">
          <Link href="/shop?category=laptop">
            <div className="image">
              <Image
                src="/images/products-categorization/laptop.png"
                alt="laptop"
                width={90}
                height={90}
              />
            </div>
            لپتاب
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={200}>
          <Link href="/shop?category=watch">
            <div className="image">
              <Image
                src="/images/products-categorization/watch.png"
                alt="watch"
                width={90}
                height={90}
              />
            </div>
            ساعت
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={400}>
          <Link href="/shop?category=accessories">
            <div className="image">
              <Image
                src="/images/products-categorization/mouse.png"
                alt="computer mouse"
                width={90}
                height={90}
              />
            </div>
            لوازم جانبی
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={600}>
          <Link href="/shop?category=tablet">
            <div className="image">
              <Image
                src="/images/products-categorization/tablet.png"
                alt="tablet"
                width={90}
                height={90}
              />
            </div>
            تبلت
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={800}>
          <Link href="/shop?category=mobile">
            <div className="image">
              <Image
                src="/images/products-categorization/phone.png"
                alt="mobile"
                width={90}
                height={90}
              />
            </div>
            موبایل
          </Link>
        </AnimatedItem>
      </ul>
    </section>
  );
}
