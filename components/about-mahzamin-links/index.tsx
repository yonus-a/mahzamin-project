import Link from "next/link";
import "./style.scss";

export default function AboutMahzaminLinks() {
  return (
    <div className="about-mahzamin-links">
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
    </div>
  );
}
