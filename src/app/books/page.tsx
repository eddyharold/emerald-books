import Header from "@/components/header";
import Footer from "@/components/footer";

import Hero from "@/app/books/_components/hero";
import CollectionList from "./_components/collection-list";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <CollectionList />
      </main>
      <Footer />
    </div>
  );
}
