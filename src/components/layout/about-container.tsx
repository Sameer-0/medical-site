import Image from "next/image";
import Link from "next/link";

const AboutContainer = () => {
  return (
    <div className="pt-16 md:pt-24 px-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
          <Image
            src="/images/pages/landing/about-image.webp"
            alt="About image"
            width={450}
            height={500}
            className="flex-none"
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-custom text-lg md:text-2xl">10 years experience</h2>
          <h1 className="text-3xl lg:text-5xl lg:leading-[60px] font-semibold font-halyard">
            We Are Best Treatment For our Hospital.
          </h1>
          <p className="text-muted pt-5 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis,
            delectus beatae? Nemo eaque consequatur quibusdam minus ut earum
            laudantium sed totam quod nostrum illo repellat, perspiciatis et
            consectetur iste corrupti.
          </p>
          <p className="text-muted pt-3 leading-7">
            Sapiente dolores quisquam earum, quos eos magni obcaecati incidunt,
            quod veritatis at saepe accusantium dolorum ad, quam illo explicabo
            reiciendis? Nam cupiditate reiciendis reprehenderit vitae similique
            porro sequi illo pariatur?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-5 pt-8 px-8 sm:px-2">
            <div>
              <div className="flex gap-x-5">
                <div className="relative img-bg-cicle pl-1">
                  <Image
                    src="/images/pages/landing/mission.webp"
                    alt="Mission"
                    width={50}
                    height={50}
                    className="object-cover mr-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-left">Our Mission</h4>
                </div>
              </div>
              <div className="text-muted leading-7 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat necessitatibus rem eius.
              </div>
            </div>
            <div>
            <div className="flex gap-x-5">
                <div className="relative img-bg-cicle pl-1">
                  <Image
                    src="/images/pages/landing/vision.webp"
                    alt="Mission"
                    width={50}
                    height={50}
                    className="object-cover mr-auto"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-left">Our Vision</h4>
                </div>
              </div>
              <div className="text-muted leading-7 pt-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa fugiat necessitatibus rem eius.
              </div>
            </div>
          </div>

          <div className="pt-8  flex gap-x-6">
            <Link  href="/contact" className="animated-button black">
              About More
              <i aria-hidden className="fa-solid fa-arrow-right"></i>
            </Link>
            <i aria-hidden className="fa-solid fa-play custom-icon"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
