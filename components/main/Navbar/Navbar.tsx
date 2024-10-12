import React from "react";
import Logo from "../Logo";
import DesktopNav, { type Navlinks } from "./DesktopNav";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle";
import Mobilenav from "./Mobilenav";
const Navlinks: Navlinks[] = [
  { name: "dashbpoard", href: "/dashboard" },
  { name: "transaction", href: "/transaction" },
  { name: "manage", href: "/manage" },
];
function Navbar() {
  return (
    <section className="flex items-center justify-between py-4">
      <Mobilenav navLinks={Navlinks} />
      <Logo />
      <DesktopNav navLinks={Navlinks} />

      <div className="flex items-center justify-between gap-x-2">
        <ModeToggle />
        <UserButton afterSwitchSessionUrl="/sign-in" />
      </div>
    </section>
  );
}

export default Navbar;
