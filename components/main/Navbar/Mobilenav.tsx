"use client";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Logo from "../Logo";
import { NavProps } from "./DesktopNav";
import { usePathname } from "next/navigation";
import Link from "next/link";

function Mobilenav({ navLinks }: NavProps) {
  const path = usePathname();

  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger>
          <AlignJustify />
        </SheetTrigger>
        <SheetContent className="space-y-4">
          <SheetHeader className="mt-8">
            <Logo />
          </SheetHeader>
          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li
                className={`px-2 py-3 ${
                  path === item.href
                    ? "text-secondary-foreground bg-primary/90 rounded-md text-white"
                    : ""
                } `}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Mobilenav;
