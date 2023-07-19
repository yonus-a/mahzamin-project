"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "@components/button";
import Image from "next/image";
import "./style.scss";

interface Props {
  main: string | null;
  alt: string | null;
  images: any;
}

export default function ProductCarousel({ main, images, alt }: Props) {
  var [mainImage, setMain] = useState(main);
  var base = "/images/products/";

  const handleClick = (image: string) => {
    setMain(image);
  };

  function getDirection() {
    return window.innerWidth >= 1160 ? "vertical" : "horizontal";
  }

  return (
    <div className="product-carousel">
      <Image
        className="main-image"
        src={base + mainImage}
        alt={`${alt}`}
        width={400}
        height={400}
      />
      {images.length > 0 ? (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          direction={getDirection()}
          onResize={(swiper) => swiper.changeDirection(getDirection())}
        >
          {images.map(({ image }: { image: string }) => (
            <SwiperSlide>
              <Button
                className="button-image"
                onClick={handleClick.bind(null, image)}
              >
                <Image
                  src={base + image}
                  alt={`${alt}`}
                  width={100}
                  height={100}
                />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
}
