import Image from "next/image";
import { AnimateText } from "../animations";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-[url(/images/hero-bg.webp)] min-h-screen bg-cover relative">
      <div className="container px-4 md:pt-20 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="col-span-1 pt-12 md:pl-10 text-center md:text-left">
          <h3 className="text-lg md:text-2xl text-custom">
            Hi, It’s our Glenic
          </h3>
          <AnimateText 
            x={-300}
            type="linear"
            duration={0.5}
          >
            <h1 className="text-4xl md:text-6xl font-semibold font-halyard">
              Make Your Appointment With Our Consultants.
            </h1>
          </AnimateText>
          <AnimateText
            x={300}
            type="linear"
            duration={0.5}
            className="pt-5 text-muted leading-7"
          >
            Transform Your Vision into Reality: Consult with Our Experts to
            Develop Strategic Plans and Achieve Success. Schedule Your
            Appointment Now for Personalized Solutions and Support!
          </AnimateText>
          <div className="py-8">
            <Link  href="/contact" className="animated-button">
              Get Appointment
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="col-span-1 flex justify-center">
          <div className="relative w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[380px] md:h-[380px]">
            <Image src="/images/pages/landing/hero.webp" alt="Hero" fill />
          </div>
        </div>
      </div>
      <Image
        src="/images/pages/landing/bulb.webp"
        alt="Bulb"
        width={35}
        height={35}
        className="absolute top-[15%] sm:top-16 md:top-24 md:right-2/3 animate-spin-slow"
      />
      <Image
        src="/images/pages/landing/pulse-circle.webp"
        alt="Bulb"
        width={35}
        height={35}
        className="absolute top-[60%] md:top-16 right-10 md:right-2/4 animate-heartbeat"
      />
      <Image
        src="/images/pages/landing/big-circle.webp"
        alt="Bulb"
        width={150}
        height={150}
        className="hidden md:block absolute top-5 md:left-[55%] right-5"
      />
      <Image
        src="/images/pages/landing/pulse-doughnut.webp"
        alt="Bulb"
        width={50}
        height={50}
        className="absolute top-1/2 left-10 md:left-2 animate-heartbeat"
      />
      <Image
        src="/images/pages/landing/mid-bottom-pulse.webp"
        alt="Bulb"
        width={100}
        height={100}
        className="absolute -bottom-1 md:bottom-1/4 right-12 md:left-1/2 animate-heartbeat"
      />
      <Image
        src="/images/pages/landing/oval-stale.webp"
        alt="Bulb"
        width={200}
        height={200}
        className="absolute -bottom-6 left-10"
      />
    </div>
  );
};

export default Hero;
