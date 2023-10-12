import { Pagination, A11y, Autoplay } from "swiper/modules";

export default function autoPlaySwiper(dealy: number = 3000) {
  return {
    slidesPerView: 1,
    autoplay: { delay: dealy, disableOnInteraction: false },
    pagination: { clickable: true },
    modules: [Pagination, A11y, Autoplay],
  };
}
