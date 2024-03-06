import Image from "next/image";
import Link from "next/link";

const AboutContainer = () => {
  return (
    <div className="pt-16 md:pt-24 px-10">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-5 flex justify-center items-center">
          <Image
            src="/images/pages/landing/about.jpg"
            alt="About image"
            width={600}
            height={700}
            className="flex-none"
          />
        </div>
        <div className="col-span-12 lg:col-span-7">
          <h2 className="text-custom text-lg md:text-2xl">10 years experience</h2>
          <h1 className="text-3xl lg:text-5xl lg:leading-[60px] font-semibold font-halyard">
            We Are Best Treatment For our Hospital.
          </h1>
          <p className="text-muted pt-5 leading-7">
          At Galveston Specialty Pharmacy, delivering excellent customer service to all patients is at the core of everything we do. We believe that every individual who walks through our doors deserves to be treated with kindness, respect, and compassion. From the moment you step into our pharmacy, you will experience a welcoming and supportive atmosphere where your needs are our top priority. Our dedicated team of pharmacists and staff members are committed to providing personalized care and attention to ensure that every patient receives the highest level of service possible.
          </p>
          <p className="text-muted pt-3 leading-7">
          When it comes to serving patients affected by HIV, we go above and beyond to meet their specific needs. Our pharmacy offers comprehensive medication counseling and adherence support tailored to each individual's treatment plan. We understand the importance of medication adherence in managing HIV effectively, and we work closely with patients to address any questions or concerns they may have, empowering them to take control of their health and well-being
          </p>
          <p className="text-muted pt-3 leading-7">
          <p className="text-muted pt-3 leading-7">
          In addition to our personalized services, we also strive to be a trusted source of information and advocacy for the HIV community. We actively collaborate with healthcare providers and community organizations to raise awareness, reduce stigma, and promote access to essential resources and support services. At our pharmacy, we believe that everyone deserves access to high-quality healthcare, and we are committed to being a steadfast ally and partner to those affected by HIV.          </p>          </p>
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
              At Galveston Specialty Pharmacy, our mission is to redefine the standard of care for patients with complex medical needs by delivering unparalleled expertise, compassion, and support.               </div>
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
              Our vision at Galveston Specialty Pharmacy is to be the cornerstone of health and wellness in our community. We envision a future where every individual has convenient access to quality pharmaceutical care, personalized services, and essential health products. Our goal is to create a welcoming and supportive environment where customers feel empowered to prioritize their well-being and lead healthier lives.              </div>
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
