import PcOnly from "../../general/pc-only";
import Link from "next/link";

export default function AboutMahzaminLinks() {
  return (
    <PcOnly>
      <h3>در باره پیکاکالا</h3>
      <ul>
        <li>
          <Link href="#">پیکاکالا در یک نگاه</Link>
        </li>
        <li>
          <Link href="#">اهداف و تعهدات ما</Link>
        </li>
        <li>
          <Link href="#">سر گذشت پیکاکالا</Link>
        </li>
        <li>
          <Link href="#">تماس با ما</Link>
        </li>
      </ul>
    </PcOnly>
  );
}
