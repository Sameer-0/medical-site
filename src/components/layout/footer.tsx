import { MapPin, Mails } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Separator className="bg-slate-200 h-[2px]" />
      <footer className="bg-[#E8A647] text-white">
        {/* <div className="px-2 md:px-16 grid gap-5 sm:grid-cols-2 grid-cols-1 md:grid-cols-3 py-4 md:py-4">
          <div className="col-span-full sm:col-span-2 md:col-span-1">
            <h3 className="text-2xl md:text-3xl font-semibold text-center md:text-left pb-5">
              Please feel free to get in touch with us
            </h3>
          </div>
          <div className="col-span-full sm:col-span-2 flex flex-col md:flex-row justify-center gap-4 lg:gap-x-20">
            <div className="w-fit flex gap-x-3 justify-center">
              <MapPin className="w-5 h-7 text-primary" />
              <div>
                <h5 className="font-semibold">Our Location</h5>
                <p>707 23rd Street, Galveston, TX</p>
              </div>
            </div>
            <div className="w-fit flex gap-x-3 justify-center">
              <Mails className="w-5 h-7 text-primary" />
              <div>
                <h5 className="font-semibold">How Can We Help?</h5>
                <p>galvestonsrx@gmail.com</p>
              </div>
            </div>
          </div>
        </div> */}
        {/* <Separator className="bg-slate-200 h-[2px]" /> */}
        <div className="px-2 sm:px-6 md:px-16 flex justify-center items-center py-8 gap-y-4">
          {/* <div className="col-span-1 bg-white w-fit p-2 rounded-lg">

          </div> */}
          <div className="pl-2 text-center text-sm md:text-base">
            <Image
              src="/images/logonbg.webp"
              alt="Logo"
              width={120}
              height={120}
              className="items-center mx-auto mb-4"
            />
            <p className="">
            At Galveston Specialty Pharmacy,
            </p>
            <p className="">
            our mission is to redefine the standard of care for patients with complex medical needs by delivering unparalleled expertise, compassion, and support.
            </p>
            <br />
            © 2024-2025 Galveston Specialty Pharmacy. All Rights Reserved
          </div>
          <div className="col-span-full md:col-span-1 flex justify-center md:justify-end gap-x-2">
            {/* <Link href="#">
              <i
                aria-hidden
                className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"
              ></i>
            </Link>
            <Link href="#">
              <i
                aria-hidden
                className="w-6 h-6 fa-brands fa-twitter hover:text-blue-600 transition-all duration-500"
              ></i>
            </Link>
            <Link href="#">
              <i
                aria-hidden
                className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"
              ></i>
            </Link> */}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
