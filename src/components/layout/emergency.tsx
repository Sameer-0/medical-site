import Image from "next/image";
import Link from "next/link";

const Emergency = () => {
  return (
    <div className="mt-20 grid gap-y-10 grid-cols-1 md:grid-cols-5">
      <div className="relative h-full min-h-[350px] max-h-[450px] col-span-2 border-blue-200">
        <Image
          src="/images/pages/landing/studio.jpg"
          alt="Emergency"
          fill
          className="px-10 sm:px-20 md:px-5 lg:px-16 rounded-lg"
        />
      </div>
      <div className="px-5 sm:px-10 col-span-3">
        <h2 className="text-primary text-lg md:text-2xl font-semibold">
          Learn About Our Hours
        </h2>
        <h1 className="text-2xl md:text-5xl font-semibold pt-2 md:pt-5">Get in touch with us on :</h1>
        <p className="text-muted pt-5">
        From personalized medication consultations to timely prescription refills and comprehensive health screenings, we prioritize the well-being of our customers above all else. Our commitment to excellence extends beyond the counter; we actively engage with our community, offering educational workshops and wellness programs to empower individuals to lead healthier lives. 
        </p>
        <ul className="pt-5">
          <li className="custom-li md:text-[24px]">Monday-Friday </li>
          <li className="custom-li md:text-[24px]">Time : 9 AM to 5 PM</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-y-5 gap-x-5 lg:gap-x-20 pt-4 md:pt-8 lg:px-12">
          <div className="flex gap-4">
            <div>
              <div className="bg-primary p-3 rounded-full">
                <Image
                  src="/images/pages/landing/phone.webp"
                  alt="Emergency"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div>
              <h5 className="text-[14px] m-0 md:text-[18px]">Phone Number</h5>
              <Link
                href="tel:409 877 7029"
                className="text-xs transition-all duration-300 hover:text-primary md:text-[18px]"
              >
                Call Us 409 877 7029
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="bg-primary p-3 rounded-full">
                {/* <Image
                  src="/images/pages/landing/email.webp"
                  alt="Emergency"
                  width={18}
                  height={18}
                /> */}
              </div>
            </div>
            {/* <div>
              <h5 className="text-[14px] m-0">Email Us!</h5>
              <Link
                href="mailto:galvestonsrx@gmail.com"
                className="text-xs transition-all duration-300 hover:text-primary"
              >
                galvestonsrx@gmail.com
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
