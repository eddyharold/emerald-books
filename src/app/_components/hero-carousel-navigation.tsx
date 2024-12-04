import { useSwiper } from "swiper/react";
import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function HeroCarouselNavigationPrev() {
  const swiper = useSwiper();

  return (
    <Button
      variant="accent"
      className="size-10 rounded-full group opacity-50 hover:opacity-100 transition-opacity duration-150 ease-out"
      onClick={() => swiper.slidePrev()}
    >
      <ChevronLeft className="group-hover:scale-150 transition-transform duration-150 ease-in-out" />
    </Button>
  );
}

export function HeroCarouselNavigationNext() {
  const swiper = useSwiper();

  return (
    <Button
      variant="accent"
      className="size-10 rounded-full group opacity-50 hover:opacity-100 transition-opacity duration-150 ease-out"
      onClick={() => swiper.slideNext()}
    >
      <ChevronRight className="group-hover:scale-150 transition-transform duration-150 ease-in-out" />
    </Button>
  );
}
