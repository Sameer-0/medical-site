import { ContactCard } from "@/components/base";
import { PageBreadCrumb } from "@/components/layout";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ContactPage = () => {
  return (
    <section className="pb-20">
      <PageBreadCrumb heading="Contact Us" label="Contact Us" />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-32 py-12 md:py-20">
        <div className="px-6 sm:px-40 md:px-0">
          <Link
            href="tel:4098777029"
            className="transition-all duration-300 hover:text-primary"
          >
            <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
              <Image
                src="/images/pages/landing/phone2.webp"
                alt="Phone"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div className="px-5 text-center pt-2">
            <h4 className="text-primary/60">Contact Phone</h4>
            <Link
              href="tel:4098777029"
              className="transition-all duration-300 hover:text-primary"
            >
              <h3 className="font-semibold text-xl pt-3">409-877-7029</h3>
            </Link>
            <p className="text-muted pt-1">
              At Galveston Specialty Pharmacy, we pride ourselves on offering
              personalized pharmacy care that prioritizes the individual needs
              and preferences of each patient.
            </p>
          </div>
        </div>
        {/* <div className="px-6 sm:px-40 md:px-0">
        <Link
                href="mailto:galvestonsrx@gmail.com"
                className="text-xs transition-all duration-300 hover:text-primary"
              >
          <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
            <Image
              src="/images/pages/landing/email2.webp"
              alt="email"
              width={30}
              height={30}
            />
          </div>
          </Link>
            <div className="px-5 text-center pt-2">
              <h4 className="text-primary/60">Contact Email</h4>
              <Link
                href="mailto:galvestonsrx@gmail.com"
                className="text-xs transition-all duration-300 hover:text-primary"
              >
              <h3 className="font-semibold text-xl pt-3">galvestonsrx@gmail.com</h3>
              </Link>
              <p className="text-muted pt-1"> <p className="text-muted pt-1">At Galveston Specialty Pharmacy, we pride ourselves on offering personalized pharmacy care that prioritizes the individual needs and preferences of each patient. </p></p>
            </div>
        </div> */}
        <div className="px-6 sm:px-40 md:px-0">
          <Link
            href="https://maps.app.goo.gl/Udy3ksmnSeuhWn1q8"
            className="text-xs transition-all duration-300 hover:text-primary bla"
          >
            <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
              <Image
                src="/images/pages/landing/location.webp"
                alt="location"
                width={30}
                height={30}
              />
            </div>
          </Link>
          <div className="px-5 text-center pt-2">
            <h4 className="text-primary/60">Our Location</h4>
            <Link
              href="https://maps.app.goo.gl/Udy3ksmnSeuhWn1q8"
              className="text-xs transition-all duration-300 hover:text-primary"
            >
              <h3 className="font-semibold text-xl pt-3">
                707 23rd Street, Galveston,TX
              </h3>
            </Link>
            <p className="text-muted pt-1">
              From medication counseling to adherence monitoring, we strive to
              empower our patients to make informed decisions about their health
              and well-being.
            </p>
          </div>
        </div>
      </div>
      <ContactCard />

      <div className="container flex flex-row items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
          Our Sister Pharmacies
        </h1>
        <div className="max-w-2xl mx-auto hover:scale-105 transition-all duration-400 hover:bg-gray-200">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/images/pages/landing/hitcon.jpg"
                width={1000}
                height={1000}
                alt="bg"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white text-center">
                  Hitchcock Hometown Pharmacy
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-center">
                8719 Highway 6 Hitchcock, TX 77563 Phone: 409 209 0847 Fax: 409
                209 0947
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto hover:scale-105 transition-all duration-400 hover:bg-gray-200">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/images/pages/landing/gs.jpg"
                width={1000}
                height={1000}
                alt="bg"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white text-center">
                  Galveston Broadway Drug
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-center" >
                2027 Broadway St Galveston, TX 77550 Phone: 409 765 7701 Fax:
                409 762 2545
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto hover:scale-105 transition-all duration-400 hover:bg-gray-200">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <Image
                className="rounded-t-lg"
                src="/images/pages/landing/hs.png"
                width={1000}
                height={1000}
                alt="bg"
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white text-center">
                  Texas Care Pharmacy 4900 Fannin St
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400 text-center">
                Houston, TX 77004 Phone: 832 769 0088 Fax: 832 769 0023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
