import Image from "next/image";
import AnimatedItem from "../animated-item";
import Link from "next/link";
import "./style.scss";

export default function AdsOne() {
  return (
    <section className="ads-one" aria-label="ads">
      <ul>
        <AnimatedItem animation="animate__zoomInRight">
          <Link href="/product/7">
            <Image
              src="/images/ads/ads1.jpg"
              alt="گوشی OPPO F19 PRO"
              width={880}
              height={440}
            />
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__zoomInLeft">
          <Link href="/product/11">
            <Image
              src="/images/ads/ads2.jpg"
              alt="بهترین موبایل OnePlus در هند"
              width={880}
              height={440}
            />
          </Link>
        </AnimatedItem>
      </ul>
    </section>
  );
}
