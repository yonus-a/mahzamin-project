import Image from "next/image";
import AnimatedItem from "../animated-item";
import Link from "next/link";
import "./style.scss";

export default function NewsArticles() {
  return (
    <section className="news-articles" aria-labelledby="articles_news">
      <div className="title">
        <h2 id="articles_news">اخبار و مقالات</h2>
        <span className="line"></span>
      </div>
      <ul>
        <AnimatedItem animation="animate__zoomIn">
          <Link href="#">
            <Image
              src="/images/news-articles/vr-headset.jpg"
              alt="اپل هدست ویژن پرو"
              width={200}
              height={200}
            />
            <p>
              اپل هدست ویژن پرو را با قیمت ۳۵۰۰ دلار معرفی کرد؛ ورود اپل به
              بازار واقعیت ترکیبی
            </p>
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__zoomIn" delay={200}>
          <Link href="#">
            <Image
              src="/images/news-articles/laptops.jpg"
              alt="مک بوک ایر ۱۵ اینچی"
              width={200}
              height={200}
            />
            <p>مک بوک ایر ۱۵ اینچی معرفی شد؛ باریک‌ترین لپ‌تاپ ۱۵ اینچی!</p>
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__zoomIn" delay={400}>
          <Link href="#">
            <Image
              src="/images/news-articles/gaming-computer.jpg"
              alt="کامپیوتر گیمینگ"
              width={200}
              height={200}
            />
            <p>راهنمای خرید کیس کامپیوتر؛ اردیبهشت سال ۱۴۰۲</p>
          </Link>
        </AnimatedItem>
        <AnimatedItem animation="animate__zoomIn" delay={600}>
          <Link href="#">
            <Image
              src="/images/news-articles/S23-FE.jpg"
              alt="گوشی سامسونگ مدل گلکسی S23 FE"
              width={200}
              height={200}
            />
            <p>رندرهای گلکسی S23 FE از طراحی مشابه با گلکسی A54 خبر می‌دهند</p>
          </Link>
        </AnimatedItem>
      </ul>
    </section>
  );
}
