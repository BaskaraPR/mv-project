import { ReactNode } from "react";
import Footer from "@/app/(main)/components/footer";
import Navbar from "@/app/(main)/components/navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <><div className="pb-10">
      <Navbar />
      </div>
      <main>
        <div className="h-[84px]"></div>
        {children}
        <Footer />
      </main>
    </>
  );
}
