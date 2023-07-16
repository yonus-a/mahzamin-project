import Image from "next/image";
import AnimatedItem from "../animated-item";
import Link from "next/link";
import "./style.scss";

export default function MobileBasePrice() {
  return (
    <section className="mobile-base-price" aria-labelledby="mobileBasePrice">
      <div className="title">
        <h2 id="mobileBasePrice">گوشی بر اساس قیمت</h2>
        <span className="line"></span>
      </div>
      <ul>
        <AnimatedItem animation="animate__pulse">
          <Link href="#">
            <Image
              src="/images/mobile-base-price/mobile5.png"
              alt="گوشی از 5 میلیون تومان"
              width={200}
              height={200}
            />
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={200}>
          <Link href="#">
            <Image
              src="/images/mobile-base-price/mobile5-10.png"
              alt="گوشی 5 تا 10 میلیون تومان"
              width={200}
              height={200}
            />
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={400}>
          <Link href="#">
            <Image
              src="/images/mobile-base-price/mobile10-15.png"
              alt="گوشی 10 تا 15 میلیون تومان"
              width={200}
              height={200}
            />
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__pulse" delay={600}>
          <Link href="#">
            <Image
              src="/images/mobile-base-price/mobile15-20.png"
              alt="گوشی 15 تا 20 میلیون تومان"
              width={200}
              height={200}
            />
          </Link>
        </AnimatedItem>
      </ul>
    </section>
  );
}