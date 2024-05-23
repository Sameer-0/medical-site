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
        <div className="pt-10 md:py-20 col-span-full md:col-span-8 text-center font-semibold">
          <h2 className="text-primary text-lg md:text-2xl">Managing HIV can be complex. Getting your prescriptions doesn’t have to be</h2>
          <h1 className="text-white">
            Taking care of your health demands time and effort and remembering to take all your medications can be challenging. Let us simplify things for you by consolidating all your prescriptions into one convenient location. We have the capability to fill prescriptions from any healthcare provider, including your primary care physician and other specialists.
          </h1>
          <div className="pt-8">
            <Link href="/contact" className="animated-button">
              Contact Us
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkup;
