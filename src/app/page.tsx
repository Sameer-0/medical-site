import { Divider, Slider } from "@/components/base";
import {
  AboutContainer,
  Checkup,
  Emergency,
  Hero,
  Testimonials,
} from "@/components/layout";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      {/* <AboutContainer /> */}
      <Divider />
      <Checkup />
      <Emergency />
      <Testimonials />
    </>
  );
}
