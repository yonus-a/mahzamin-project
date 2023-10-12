"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { nanoid } from "nanoid";
import Image from "next/image";
import Link from "next/link";
import "./style.scss";

// it can fetched from db and controld in admin panel
const brands = [
  { name: "sony", image: "sony.png" },
  { name: "huawei", image: "huawei.png" },
  { name: "samsung", image: "sumsung.png" },
  { name: "xiaomi", image: "xiaomi.png" },
  { name: "oneplus", image: "oneplus.png" },
  { name: "sony", image: "sony.png" },
];

export default function Brands() {
  return (
    <section className="brands" aria-label="brands">
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={15}>
        {brands.map(({ name, image }: any) => (
          <SwiperSlide key={nanoid()}>
            <Link href={`/shop?brand=${name}`}>
              <Image
                src={`/images/brands/${image}`}
                alt={`sony`}
                width={200}
                height={200}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
