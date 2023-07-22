"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../button";
import Image from "next/image";
import "./style.scss";

interface Props {
  main: string | null;
  alt: string | null;
  images: any;
}

export default function ProductGallary({ main, images, alt }: Props) {
  var [mainImage, setMainImage] = useState(main);
  var base = "/images/products/";

  const handleClick = (image: string) => {
    setMainImage(image);
  };

  function getDirection() {
    return window.innerWidth >= 1160 ? "vertical" : "horizontal";
  }

  return (
    <div className="product-gallary">
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
          {images.map(({ name }: { name: string }) => (
            <SwiperSlide>
              <Button
                className="button-image"
                onClick={handleClick.bind(null, name)}
              >
                <Image
                  src={base + name}
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
