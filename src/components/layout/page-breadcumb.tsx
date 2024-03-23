import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const PageBreadCrumb = ({
  heading,
  label,
}: {
  heading: string;
  label: string;
}) => {
  return (
    <div className="bg-[url(/images/pages/breadcrumb.webp)] bg-cover text-center md:px-40 py-10 md:py-20">
      <h1 className="text-5xl lg:text-6xl font-semibold pb-2">{heading}</h1>
      <ul className="flex justify-center items-center gap-x-1">
        <li className="hover:text-primary transition-all duration-300">
          <Link href="/">Home</Link>
        </li>
        <li>
          <ChevronRight className="w-5 h-4" />
        </li>
        <li>{label}</li>
      </ul>
    </div>
  );
};

export default PageBreadCrumb;
