"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const brands = [
  { id: 1, name: "sony", image: "sony.png" },
  { id: 2, name: "huawei", image: "huawei.png" },
  { id: 3, name: "samsung", image: "sumsung.png" },
  { id: 4, name: "xiaomi", image: "xiaomi.png" },
  { id: 5, name: "oneplus", image: "oneplus.png" },
  { id: 6, name: "sony", image: "sony.png" },
];

export default function Brands() {
  return (
    <section className="brands" aria-label="brands">
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={15}>
        {brands.map(({ name, image, id }: any) => (
          <SwiperSlide key={id}>
            <Link href={`/shop?brand=${name}`}>
              <Image
                src={`/images/brands/${image}`}
                height={200}
                alt={`sony`}
                width={200}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
