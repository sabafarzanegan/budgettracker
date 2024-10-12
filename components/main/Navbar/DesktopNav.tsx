"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type Navlinks = {
  name: string;
  href: string;
};
export type NavProps = {
  navLinks: Navlinks[];
};

function DesktopNav({ navLinks }: NavProps) {
  const path = usePathname();
  return (
    <div className="hidden md:block">
      <ul className="flex items-center justify-center gap-x-4">
        {navLinks.map((item) => (
          <li
            className={`px-2 ${
              path === item.href
                ? "text-secondary-foreground bg-primary/90 rounded-md text-white"
                : ""
            } `}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DesktopNav;
