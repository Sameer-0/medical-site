import Image from "next/image";
import Link from "next/link";

const Checkup = () => {
  return (
    <div className="bg-[url(/images/pages/landing/checkup-bg.webp)]">
      <div className="grid grid-cols-12 px-4 gap-x-5 md:px-24 py-10 md:py-0">
        <div className="col-span-full md:col-span-4">
          <Image
            src="/images/pages/landing/watchpharma.jpg"
            alt="Checkup"
            width={800}
            height={800}
            className="mx-auto md:mt-20 lg:mt-5 rounded-full"
          />
        </div>
        <div className="pt-10 md:py-20 col-span-full md:col-span-8 text-center">
          <h2 className="text-primary text-lg md:text-2xl">You'll find everything you need here</h2>
          <h1 className="text-2xl md:text-5xl text-white font-semibold">
            We Provide The Best Pharmacy Services For You And Your Family.
          </h1>
          <div className="pt-8">
            <Link href="/contact" className="animated-button">
              Get Appointment
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkup;
