import { PiggyBank } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

function Logo() {
  return (
    <div className="flex items-center gap-x-2 text-primary">
      <PiggyBank />
      <h1 className="font-semibold text-lg">Budget tracker</h1>
      <ModeToggle />
    </div>
  );
}

export default Logo;
