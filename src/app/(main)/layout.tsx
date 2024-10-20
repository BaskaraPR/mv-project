import { ReactNode } from "react";
import Footer from "@/app/(main)/components/footer";
import Navbar from "@/app/(main)/components/navbar";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-[1169px] px-5">
        <div className="h-[84px]"></div>
        {children}
        <Footer />
      </main>
    </>
  );
}
