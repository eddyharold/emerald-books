import Header from "@/components/header";
import Footer from "@/components/footer";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const Hero = dynamic(() => import("@/app/books/_components/hero"));
const CollectionList = dynamic(() => import("@/app/books/_components/collection-list"));

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
          <CollectionList />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
