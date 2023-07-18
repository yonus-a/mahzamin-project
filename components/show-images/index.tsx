"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Button from "@components/button";

export default function ShowImages({
  main,
  images,
  alt,
}: {
  main: string;
  images: [];
  alt: string;
}) {
  var [mainImage, setMain] = useState(main);
  var base = "/images/products/";

  const handleClick = (image: string) => {
    setMain(image);
  };

  return (
    <div className="show-images">
      <Swiper>
        {images.map(({ image }) => (
          <SwiperSlide>
            <Button onClick={handleClick.bind(null, image)}>
              <Image src={base + image} alt={alt} width={100} height={100} />
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Image src={base + mainImage} alt={alt} width={400} height={400} />
    </div>
  );
}
