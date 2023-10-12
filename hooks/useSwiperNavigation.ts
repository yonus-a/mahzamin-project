import { useCallback, useRef } from "react";

export default function useSwiperNavigation() {
  const swiperRef = useRef<any>(null);

  const handleNext = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  }, []);

  return {
    swiperRef,
    handleNext,
    handlePrev,
  };
}
