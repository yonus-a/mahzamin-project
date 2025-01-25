"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import Icon from "@components/general/icon";
import { ProductSliderType } from "./type";
import { A11y } from "swiper/modules";
import ProductCard from "../card";
import Link from "next/link";
import "./styles.scss";

export default function ProductSlider({
  style = {},
  products,
  title,
}: ProductSliderType) {
  return (
    <section className="product-slider" style={style}>
      <div className="header">
        <h2>{title}</h2>
        <Link href="#" className="icon-wrapper more">
          بیشتر
          <Icon name="chevron-left" />
        </Link>
      </div>
      <Swiper modules={[A11y]} slidesPerView={"auto"} spaceBetween={10}>
        {products.map((item) => (
          <SwiperSlide style={{ width: 180, height: 228 }} key={item.id}>
            <ProductCard product={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
