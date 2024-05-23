"use client";
import React from "react";
import Image from "next/image";
import { HEADER } from "@/data";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LayoutGrid, Menu, Search } from "lucide-react";
import { SidebarDrawer } from ".";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

const BottomHeader = () => {
  return (
    <header className="bg-white sticky top-0 left-0 right-0 z-30 container pt-4 pb-1 shadow-md">
      <nav className="flex justify-between items-center pb-4">
        <Image src="/images/logo.webp" alt="Logo" width={150} height={150} />
        <ul className="hidden md:flex gap-x-7 font-semibold text-gray-700 dark:text-gray-300">
          {HEADER.map((item) => (
            item.child && item.child.length > 1 ? 
              <li className="flex relative group" key={item.label}>
              <a href="#" className="mr-1">
                {item.label}
              </a>
              <i className="fa-solid fa-chevron-down fa-2xs pt-3"></i>
              <ul className="absolute bg-white p-3 w-52 top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-lg">
                {item.child.map((child) => (
                  <li className="text-sm hover:bg-slate-100 leading-8" key={child.label}>
                    <a href={child.path} className="px-4">{child.label}</a>
                  </li>
                ))}
              </ul>
            </li>
             : 
              <li key={item.label} className="relative">
                <Link
                  href={item.path}
                  className="after:bg-primary after:absolute after:h-0.5 after:w-0 after:-bottom-1 after:left-0 hover:after:w-full after:transition-all after:duration-300"
                >
                  <p className="transition-all duration-300 hover:text-primary">
                    {item.label}
                  </p>
                </Link>
              </li>
          ))}
        </ul>
        <div className="space-x-1">
          {/* <button title="Search" aria-label="Search" className="px-2 py-2 rounded-full bg-custom">
            <Search className="h-5 w-5 text-white" aria-hidden="true" />
          </button> */}
          <SidebarDrawer />
        </div>
      </nav>
    </header>
  );
};

export default BottomHeader;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "text-slate-700 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-slate-700">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-slate-700">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
