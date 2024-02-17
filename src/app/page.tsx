import { Slider } from "@/components/base";
import { AboutContainer, Checkup, Emergency, Hero, Testimonials } from "@/components/layout";

export default function Home() {
  return (
    <>
      <Hero />
      <Slider />
      <AboutContainer />
      <div className="py-20 flex gap-x-5 justify-center">
        <div className="w-6 h-6 bg-primary/70 rounded-sm"></div>
        <div className="w-6 h-6 bg-primary/70 rounded-sm"></div>
        <div className="w-6 h-6 bg-primary/70 rounded-sm"></div>
      </div>
      <Checkup />
      <Emergency />
      <Testimonials />
    </>
  );
}
