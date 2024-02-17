import React from "react";
import Image from "next/image";
import { HEADER } from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Menu, Search } from "lucide-react";
import { SidebarDrawer } from ".";

const BottomHeader = () => {
  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-30 container pt-4 pb-1 shadow-md">
      <nav className="flex justify-between items-center pb-4">
        <Image src="/images/logo.webp" alt="Logo" width={100} height={100} />
        <ul className="hidden md:flex gap-x-7 font-semibold text-gray-700 dark:text-gray-300">
          {HEADER.map((item) => (
            <li key={item.label} className="relative">
              <Link href={item.path} className="after:bg-primary after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                <p className="transition-all duration-300 hover:text-primary">
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="space-x-1">
          <button title="Search" aria-label="Search" className="px-2 py-2 rounded-full bg-custom">
            <Search className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
          <SidebarDrawer />
        </div>
      </nav>
    </header>
  );
};

export default BottomHeader;
