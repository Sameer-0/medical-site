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
          Emergency Helpline
        </h2>
        <h1 className="text-2xl md:text-5xl font-semibold pt-2 md:pt-5">Need Emergency Contact.</h1>
        <p className="text-muted pt-5">
        Our pharmacy is committed to your health and well-being every hour of every day. Our doors never close, and our dedicated team is always on hand to fill your prescriptions, offer advice, and provide the care you deserve, 24/7. Your health is our priority, and we're here to support you at any time.
        </p>
        <ul className="pt-5">
          <li className="custom-li md:text-[24px]">24/7 Contact Our Hospital.</li>
          <li className="custom-li md:text-[24px]">Emergency Contact Our Phone Number.</li>
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
              <h5 className="text-[14px] m-0">Phone Number</h5>
              <Link
                href="tel:409-877-7029 "
                className="text-xs transition-all duration-300 hover:text-primary"
              >
                Call Me 409-877-7029
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <div className="bg-primary p-3 rounded-full">
                <Image
                  src="/images/pages/landing/email.webp"
                  alt="Emergency"
                  width={18}
                  height={18}
                />
              </div>
            </div>
            <div>
              <h5 className="text-[14px] m-0">Quick You Email!</h5>
              <Link
                href="mailto:sameershaikhx123@gmail.com"
                className="text-xs transition-all duration-300 hover:text-primary"
              >
                Help.info@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
