"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";

import "./style.scss";

export default function Brands() {
  return (
    <section className="brands" aria-label="brands">
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={10}>
        <SwiperSlide>
          <Link href="#">
            <Image
              src="/images/brands/sony.png"
              alt="sony"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
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
          <Link href="#">
            <Image
              src="/images/brands/sumsung.png"
              alt="sumsung"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <Image
              src="/images/brands/xiaomi.png"
              alt="xiaomi"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="#">
            <Image
              src="/images/brands/oneplus.png"
              alt="oneplus"
              width={200}
              height={200}
            />
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
