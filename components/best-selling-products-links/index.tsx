import PcOnly from "../pc-only";
import Link from "next/link";

export default function BestSellingProductsLinks() {
  return (
    <PcOnly>
      <h3>پرفروش ترین محصولات</h3>
      <ul>
        <li>
          <Link href="#">شیائومی نوت 11</Link>
        </li>
        <li>
          <Link href="#">گوشی A32 سامسونگ</Link>
        </li>
        <li>
          <Link href="#">پوکو x4 پرو</Link>
        </li>
        <li>
          <Link href="#">گوشی A23 سامسونگ</Link>
        </li>
      </ul>
    </PcOnly>
  );
}
