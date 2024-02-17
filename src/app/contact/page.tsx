import { ContactCard } from "@/components/base";
import { PageBreadCrumb } from "@/components/layout";
import Image from "next/image";
import React from "react";

const ContactPage = () => {
  return (
    <section className="pb-20">
      <PageBreadCrumb heading="Contact Us" label="Contact Us" />
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5 md:px-32 py-12 md:py-20">
        <div className="px-6 sm:px-40 md:px-0">
          <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
            <Image
              src="/images/pages/landing/phone2.webp"
              alt="Phone"
              width={30}
              height={30}
            />
          </div>
            <div className="px-5 text-center pt-2">
              <h4 className="text-primary/60">Contact Phone</h4>
              <h3 className="font-semibold text-xl pt-3">409-877-7029</h3>
              <p className="text-muted pt-1">Nunc dolor mauris, hendrerit sit amet felis in, interdum rhoncus.</p>
            </div>
        </div>
        <div className="px-6 sm:px-40 md:px-0">
          <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
            <Image
              src="/images/pages/landing/email2.webp"
              alt="email"
              width={30}
              height={30}
            />
          </div>
            <div className="px-5 text-center pt-2">
              <h4 className="text-primary/60">Contact Email</h4>
              <h3 className="font-semibold text-xl pt-3">info.Mivaan@gmail.com</h3>
              <p className="text-muted pt-1">Nunc dolor mauris, hendrerit sit amet felis in, interdum rhoncus.</p>
            </div>
        </div>
        <div className="px-6 sm:px-40 md:px-0">
          <div className="bg-primary/10 w-fit p-5 mx-auto rounded-full">
            <Image
              src="/images/pages/landing/location.webp"
              alt="location"
              width={30}
              height={30}
            />
          </div>
            <div className="px-5 text-center pt-2">
              <h4 className="text-primary/60">Our Location</h4>
              <h3 className="font-semibold text-xl pt-3">707 23rd Street, Galveston,TX</h3>
              <p className="text-muted pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
        </div>
      </div>
      <ContactCard />
    </section>
  );
};

export default ContactPage;
