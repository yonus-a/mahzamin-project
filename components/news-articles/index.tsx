import AnimatedItem from "../animated-item";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

const articles = [
  {
    image: "vr-headset.jpg",
    alt: "اپل هدست ویژن پرو",
    text: "اپل هدست ویژن پرو را با قیمت ۳۵۰۰ دلار معرفی کرد؛ ورود اپل به بازار واقعیت ترکیبی",
  },
  {
    image: "laptops.jpg",
    alt: "مک بوک ایر ۱۵ اینچی",
    text: "مک بوک ایر ۱۵ اینچی معرفی شد؛ باریک‌ترین لپ‌تاپ ۱۵ اینچی!",
  },
  {
    image: "gaming-computer.jpg",
    alt: "کامپیوتر گیمینگ",
    text: "راهنمای خرید کیس کامپیوتر؛ اردیبهشت سال ۱۴۰۲",
  },
  {
    image: "S23-FE.jpg",
    alt: "گوشی سامسونگ مدل گلکسی S23 FE",
    text: "رندرهای گلکسی S23 FE از طراحی مشابه با گلکسی A54 خبر می‌دهند",
  },
];

export default function NewsArticles() {
  return (
    <section className="news-articles" aria-labelledby="articles_news">
      <div className="title">
        <h2 id="articles_news">اخبار و مقالات</h2>
        <span className="line"></span>
      </div>
      <ul>
        {articles.map(({ image, alt, text }: any, idx: number) => (
          <AnimatedItem
            key={image}
            animation="animate__zoomIn"
            delay={idx * 200}
          >
            <Link href="#">
              <Image
                src={`/images/news-articles/${image}`}
                alt={alt}
                width={200}
                height={200}
              />
              <p>{text}</p>
            </Link>
          </AnimatedItem>
        ))}
      </ul>
    </section>
  );
}
