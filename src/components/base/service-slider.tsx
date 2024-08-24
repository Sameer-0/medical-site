"use client";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });
import { CarouselCard } from ".";
import dynamic from "next/dynamic";

const responsive = {
  0: {
    items: 1,
    margin: 5,
  },
  600: {
    items: 2,
    margin: 10,
  },
  900: {
    items: 3,
    margin: 20,
  },
  1200: {
    items: 4,
    margin: 30,
  },
};

let obj =[
  {
    "image" : 1,
    "headerText" : "HIV Care",
    "bodyText" : "Human Immunodeficiency Virus"
  },
  {
    "image" : 2,
    "headerText" : "Personalized Care",
    "bodyText" : "Personalized Pharmacy Care"
  },
  {
    "image" : 3,
    "headerText" : "PrEP",
    "bodyText" : "Pre-Exposure Prophylaxis"
  },
  {
    "image" : 4,
    "headerText" : "PEP",
    "bodyText" : "Post-Exposure Prophylaxis"
  },
  {
    "image" : 5,
    "headerText" : "Delivery Services",
    "bodyText" : "Free Delivery"
  }
]
const ServiceSlider = () => {
  return (
    <OwlCarousel
      className="owl-theme pt-16 md:pt-24"
      loop
      margin={10}
      autoplay
      responsive={responsive}
    >
      {obj.map((item, i) => (
        <CarouselCard key={i} image={`carousel/image-${item.image}`} headerText={item.headerText} bodyText={item.bodyText}/>
      ))}
    </OwlCarousel>
  );
};

export default ServiceSlider;
