import Image from "next/image";
import Link from "next/link";
import "./style.scss";

export default function AdsTow() {
  return (
    <section className="ads-tow" aria-label="ads tow">
      <Link href="#" className="wow animate__animated animate__bounceInUp">
        <Image
          src="/images/ads/ads3.png"
          alt="انواع پرینتر با کیفیت عالی"
          width={3540}
          height={504}
        />
      </Link>
    </section>
  );
}
