import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  Accordion,
} from "../ui/accordion";
import { RESPONSIVE_HEADER } from "@/data";

export function SidebarDrawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="md:hidden pl-4">
          <Menu />
        </button>
      </SheetTrigger>
      <SheetContent className="z-[9999]  bg-white">
        <SheetHeader>
          <SheetTitle className="text-primary">Menu</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div>
            {RESPONSIVE_HEADER.map((val, i) =>
              <SheetClose
                key={i}
                className="w-full h-10 text-left"
                asChild
              >
                <>
                  <Link className="block" href={val.path}>{val.label}</Link>
                  <br />
                </>
              </SheetClose>
            )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
