"use client";

import useSwiperNavigation from "@hooks/useSwiperNavigation";
import SwiperNavigation from "@components/swiperNavigation";
import autoPlaySwiper from "@utils/autoPlaySwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import "./style.scss";

const imageSlides = [
  { src: "/images/hero/image1.jpg", alt: "" },
  { src: "/images/hero/image2.jpg", alt: "" },
  { src: "/images/hero/image3.jpg", alt: "" },
  { src: "/images/hero/image4.jpg", alt: "" },
  { src: "/images/hero/image5.jpg", alt: "" },
];

export default function Hero() {
  var { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <section className="hero" aria-label="hero">
      <Swiper {...autoPlaySwiper()} ref={swiperRef}>
        {imageSlides.map(({ src, alt }: any) => (
          <SwiperSlide key={nanoid()}>
            <Image src={src} alt={alt} width={1024} height={720} />
          </SwiperSlide>
        ))}
        <SwiperNavigation onPrev={handlePrev} onNext={handleNext} />
      </Swiper>
    </section>
  );
}
