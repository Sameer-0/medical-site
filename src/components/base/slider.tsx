"use client";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import OwlCarousel from "react-owl-carousel";
import { CarouselCard } from ".";

const responsive = {
  0: {
    items: 1,
    margin: 5
  },
  600: {
    items: 2,
    margin: 10
  },
  900: {
    items: 3,
    margin: 20
  },
  1200: {
    items: 4,
    margin: 30
  }
}
const Slider = () => {
  return (
    <OwlCarousel className="owl-theme pt-16 md:pt-24" loop margin={10} autoplay responsive={responsive}>
      {[1, 2, 3, 4, 1, 2, 3, 4].map((item, i) => (
        <CarouselCard key={i} index={item} />
      ))}
    </OwlCarousel>
  );
};

export default Slider;
