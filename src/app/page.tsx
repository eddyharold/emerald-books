import Header from "@/components/header";
import Footer from "@/components/footer";

import Hero from "@/app/_components/hero";
import About from "@/app/_components/about";
import CoreValues from "@/app/_components/core-values";
import Products from "@/app/_components/products";
import Services from "@/app/_components/services";
import Testimonials from "@/app/_components/testimonials";
import Contact from "@/app/_components/contact";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <CoreValues />
        <Products />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
