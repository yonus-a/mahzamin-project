import Link from "next/link";
import QuickAccessLinks from "../quick-access-links";
import BestSellingProductsLinks from "../best-selling-products-links";
import AboutMahzaminLinks from "../about-mahzamin-links";
import Namads from "../namads";
import Container from "../container";
import "./style.scss";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="section-one">
          <div className="wrapper">
            <h3>پشتیبانی</h3>
            <p>شنبه تا پنجشنبه 8 الی 23 | تلفن: 0342541256</p>
          </div>
          <Link href="#" className="move-up">
            بازگشت به بالا
          </Link>
        </div>
        <div className="section-tow">
          <div className="wrapper">
            <QuickAccessLinks />
            <BestSellingProductsLinks />
            <AboutMahzaminLinks />
          </div>
          <Namads />
        </div>
        <p className="copywriting">
          تمامی حقوق مادی معنوی این سایت متعلق به ماه زمین می باشد
        </p>
      </Container>
    </footer>
  );
}
