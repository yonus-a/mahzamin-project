"use client";

import Image from "next/image";
import Button from "../button";
import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";

// Import Swiper styles
import useSwiperNavigation from "@hooks/useSwiperNavigation";

export default function Hero() {
  var { swiperRef, handlePrev, handleNext } = useSwiperNavigation();

  return (
    <section className="hero" aria-label="hero">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        modules={[Pagination, A11y, Autoplay]}
        ref={swiperRef}
      >
        <SwiperSlide>
          <Image
            src="/images/hero/image1.jpg"
            alt=""
            width={1024}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/image2.jpg"
            alt=""
            width={1024}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/image3.jpg"
            alt=""
            width={1024}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/image4.jpg"
            alt=""
            width={1024}
            height={720}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/hero/image5.jpg"
            alt=""
            width={1024}
            height={720}
          />
        </SwiperSlide>
      </Swiper>
      <div className="navigation">
        <Button
          aria-label="Previous Slide"
          className="prev-slide"
          onClick={handlePrev}
        >
          <svg aria-hidden="true">
            <use href="#chevron-right" />
          </svg>
        </Button>
        <Button
          aria-label="Next Slide"
          className="next-slide"
          onClick={handleNext}
        >
          <svg aria-hidden="true">
            <use href="#chevron-left" />
          </svg>
        </Button>
      </div>
    </section>
  );
}
