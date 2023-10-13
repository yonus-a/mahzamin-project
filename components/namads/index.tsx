import Link from "next/link";
import Image from "next/image";
import "./style.scss";

export default function Namads() {
  return (
    <div className="namads">
      <ul>
        <li>
          <Link href="#">
            <Image
              src="/images/namads/enamad.jpeg"
              alt="اینماد"
              width={200}
              height={200}
            />
          </Link>
        </li>
        <li>
          <Link href="#">
            <Image
              src="/images/namads/samandehi.jpg"
              alt="نشان ملی ثبت"
              width={200}
              height={200}
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
