import Image from "next/image";
import Link from "next/link";
import "./styles.scss";

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="/images/logo.png"
        alt="فروشگاه اینترنتی پیکاکالا"
        width={100}
        height={100}
      />
    </Link>
  );
}
