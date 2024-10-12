import Loading from "@/components/main/Loading";
import Logo from "@/components/main/Logo";
import { ReactNode, Suspense } from "react";

function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="flex flex-col gap-y-4 items-center">
        <Logo />
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </main>
    </div>
  );
}

export default layout;
