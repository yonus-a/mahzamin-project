"use client";

import useSwiperNavigation from "@hooks/useSwiperNavigation";
import SwiperNavigation from "@components/swiperNavigation";
import autoPlaySwiper from "@utils/autoPlaySwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { nanoid } from "nanoid";
import Image from "next/image";
import "./style.scss";

// it can fetched from db and controld in admin panel
const imageSlides = [
  { image: "image1.jpg", alt: "" },
  { image: "image2.jpg", alt: "" },
  { image: "image3.jpg", alt: "" },
  { image: "image4.jpg", alt: "" },
  { image: "image5.jpg", alt: "" },
];

export default function Hero() {
  var { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <section className="hero" aria-label="hero">
      <Swiper {...autoPlaySwiper()} ref={swiperRef}>
        {imageSlides.map(({ image, alt }: any) => (
          <SwiperSlide key={nanoid()}>
            <Image
              src={`/images/hero/${image}`}
              alt={alt}
              width={1024}
              height={720}
            />
          </SwiperSlide>
        ))}
        <SwiperNavigation onPrev={handlePrev} onNext={handleNext} />
      </Swiper>
    </section>
  );
}
