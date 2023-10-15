import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      className="logo"
      width={85}
      height={85}
      alt="فروشگاه اینترنتی ماه زمین"
    />
  );
}
