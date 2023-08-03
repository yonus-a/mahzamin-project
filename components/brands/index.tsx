"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "./style.scss";

export default function Brands() {
  return (
    <section className="brands" aria-label="brands">
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={15}>
        <SwiperSlide>
          <Link href="/shop?brand=sony">
            <Image
              src="/images/brands/sony.png"
              alt="sony"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/shop?brand=huawei">
            <Image
              src="/images/brands/huawei.png"
              className="huawei"
              alt="Huawei"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/shop?brand=samsung">
            <Image
              src="/images/brands/sumsung.png"
              alt="sumsung"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/shop?brand=xiaomi">
            <Image
              src="/images/brands/xiaomi.png"
              alt="xiaomi"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/shop?brand=oneplus">
            <Image
              src="/images/brands/oneplus.png"
              alt="oneplus"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/shop?brand=sony">
            <Image
              src="/images/brands/sony.png"
              alt="sony"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
