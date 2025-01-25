"use client";

import SwiperNavigation from "@components/widgets/swiper-navigation";
import useSwiperNavigation from "@hooks/useSwiperNavigation";
import autoPlaySwiper from "@utils/autoPlaySwiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HeroType } from "./type";
import Image from "next/image";
import "./style.scss";

export default function Hero({ slides }: HeroType) {
  var { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <section className="hero" aria-label="hero">
      <Swiper {...autoPlaySwiper()} ref={swiperRef}>
        {slides.map(({ image, alt }: any) => (
          <SwiperSlide key={image}>
            <Image
              src={`/images/hero/${image}`}
              width={1920}
              height={400}
              alt={alt}
            />
          </SwiperSlide>
        ))}
        <SwiperNavigation onPrev={handlePrev} onNext={handleNext} />
      </Swiper>
    </section>
  );
}
