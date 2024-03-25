import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="sm:container flex flex-col gap-3 md:flex-row items-center justify-between text-muted text-[14px] md:text-sm pt-2">
      <div>
        <Link
          href="tel:4098777029"
          className="transition-all duration-300 hover:text-primary"
        >
          Call Us 409-877-7029
        </Link>
        &nbsp;&nbsp;/&nbsp;&nbsp;
        <Link
          href="mailto:galvestonsrx@gmail.com"
          className="transition-all duration-300 hover:text-primary"
        >
          galvestonsrx@gmail.com
        </Link>
      </div>
      <div className="flex gap-x-6 items-center">
        {/* <div className="flex gap-x-2 pr-12">
          <Link href="#">
            <i
              aria-hidden
              className="w-6 h-6 fa-brands fa-facebook-f hover:text-blue-600 transition-all duration-500"
            ></i>
          </Link>
          <Link href="#">
            <i
              aria-hidden
              className="w-6 h-6 fa-brands fa-instagram hover:text-rose-600 transition-all duration-500"
            ></i>
          </Link>
        </div> */}
        <div>
          <Link href="/contact">
            <Button variant="link" className="p-0 group">
              <span className="text-slate-800 group-hover:text-custom transition-all duration-300">
                Let's Talk
              </span>{" "}
              <span>
                <ArrowRight className="w-12 h-6 text-custom" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
