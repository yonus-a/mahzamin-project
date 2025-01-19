"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import getDirection from "@utils/getDirection";
import Button from "../../general/button";
import { useState } from "react";
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

  console.log(main);

  return (
    <div className="product-gallary">
      <Image
        className="main-image"
        src={base + mainImage}
        alt={alt as string}
        width={300}
        height={300}
      />
      {images.length > 0 && (
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          direction={getDirection()}
          onResize={(swiper) => swiper.changeDirection(getDirection())}
        >
          {images.map(({ name, id }: any) => (
            <SwiperSlide key={id}>
              <Button
                className="button-image"
                onClick={handleClick.bind(null, name)}
              >
                <Image
                  src={base + name}
                  alt={alt as string}
                  width={100}
                  height={100}
                />
              </Button>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
