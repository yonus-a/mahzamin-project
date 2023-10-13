import PcOnly from "../pc-only";
import Link from "next/link";

export default function AboutMahzaminLinks() {
  return (
    <PcOnly>
      <h3>در باره ماه زمین</h3>
      <ul>
        <li>
          <Link href="#">ماه زمین در یک نگاه</Link>
        </li>
        <li>
          <Link href="#">اهداف و تعهدات ما</Link>
        </li>
        <li>
          <Link href="#">سر گذشت ماه زمین</Link>
        </li>
        <li>
          <Link href="#">تماس با ما</Link>
        </li>
      </ul>
    </PcOnly>
  );
}
