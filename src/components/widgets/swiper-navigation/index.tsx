import Button from "../../general/button";
import Icon from "../../general/icon";
import "./style.scss";

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export default function SwiperNavigation({ onPrev, onNext }: Props) {
  return (
    <div className="swiper-navigation">
      <Button
        aria-label="Previous Slide"
        className="prev-slide"
        onClick={onPrev}
      >
        <Icon name="chevron-right" />
      </Button>
      <Button aria-label="Next Slide" className="next-slide" onClick={onNext}>
        <Icon name="chevron-left" />
      </Button>
    </div>
  );
}
