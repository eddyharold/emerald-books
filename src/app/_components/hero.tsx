import dynamic from "next/dynamic";

const HeroCarousel = dynamic(() => import("./hero-carousel"));

export default function Hero() {
  return <HeroCarousel />;
}
