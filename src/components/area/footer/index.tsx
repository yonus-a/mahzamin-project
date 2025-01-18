import BestSellingProductsLinks from "../../widgets/best-selling-products-links";
import AboutMahzaminLinks from "../../widgets/about-links";
import QuickAccessLinks from "../../widgets/quick-access-links";
import Container from "../../general/container";
import Namads from "../../widgets/namads";
import Link from "next/link";
import "./style.scss";
import Icon from "@components/general/icon";

export default function Footer() {
  return (
    <footer>
      <Container>
        <div className="section-one">
          <div className="wrapper">
            <h3>پشتیبانی</h3>
            <p>شنبه تا پنجشنبه 8 الی 23 | تلفن: 09030432204</p>
          </div>
          <Link href="#" className="move-up icon-wapper">
            <Icon name="chevron-up" />
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
          تمامی حقوق مادی معنوی این سایت متعلق به پیکاکالا می باشد
        </p>
      </Container>
    </footer>
  );
}
