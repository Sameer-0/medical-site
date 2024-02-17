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
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { HEADER } from "@/data";

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
          <SheetTitle className="text-primary">Menu Content</SheetTitle>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="space-y-2">
          <Accordion type="single" collapsible>
            {HEADER.map((val, i) =>
              // val.more ? (
              //   <AccordionItem key={i} value={"item-" + i}>
              //     <AccordionTrigger>{val.name}</AccordionTrigger>
              //     <AccordionContent>
              //       <ul className="space-y-3">
              //         {val.more.map((v, idx) => (
              //           <li key={idx} className="pl-2">
              //             <div>
              //               <Link href={v.path}>{v.name}</Link>
              //             </div>
              //           </li>
              //         ))}
              //       </ul>
              //     </AccordionContent>
              //   </AccordionItem>
              // ) : (
              // )
                <SheetTrigger
                  key={i}
                  className="w-full text-left py-5"
                  asChild
                >
                  <Link href={val.path}>{val.label}</Link>
                </SheetTrigger>
            )}
          </Accordion>
        </div>
      </SheetContent>
    </Sheet>
  );
}
