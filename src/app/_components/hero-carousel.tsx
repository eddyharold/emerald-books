"use client";

import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import { SMOOTH_DARK_COLOR } from "@/core/constants/colors";

import "swiper/css";
import "swiper/css/effect-fade";
import { ButtonLink } from "../../components/ui/button";
import { HeroCarouselNavigationNext, HeroCarouselNavigationPrev } from "./hero-carousel-navigation";
import { SwiperOptions } from "swiper/types";
import { ArrowRight } from "lucide-react";

const slides = [
  { image: "slide-1.webp", text: "Text for Slide 1" },
  { image: "slide-2.webp", text: "Text for Slide 2" },
  { image: "slide-3.webp", text: "Text for Slide 3" },
];

const HeroCarousel = () => {
  const options: SwiperOptions = useMemo(
    () => ({
      loop: true,
      effect: "fade",
      spaceBetween: 0,
      slidesPerView: 1,
      speed: 1200,
      centeredSlides: true,
      allowTouchMove: true,
      virtualTranslate: true,
      watchOverflow: true,
      preventInteractionOnTransition: true,
      autoplay: {
        delay: 8000,
        disableOnInteraction: false,
        waitForTransition: false,
      },
      breakpoints: {
        1024: {
          allowTouchMove: false,
        },
      },
    }),
    []
  );

  return (
    <Swiper {...options} modules={[EffectFade, Autoplay]} className="h-[60vh] lg:h-[80vh] relative">
      {slides.map((slide, index) => (
        <SwiperSlide key={`splide-slide-${index}`}>
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `
                linear-gradient(
                  rgba(${SMOOTH_DARK_COLOR.RGB}, 0.5),
                  rgba(${SMOOTH_DARK_COLOR.RGB}, 0.6),
                  rgba(${SMOOTH_DARK_COLOR.RGB}, 0.7)
                ),
                url('/assets/images/hero-slides/${slide.image}')
              `,
            }}
          >
            <div className="h-full flex flex-col justify-center container text-muted text-center">
              <h1 className="text-4xl md:text-5xl lg:text-7xl md:max-w-5xl mx-auto font-bold mb-4 font-recoleta">
                Empowering Education with <span className="text-brand-200">Quality Publishing</span>
              </h1>

              <p className="md:text-xl lg:text-2xl md:max-w-2xl mx-auto mb-8">
                Discover educational resources that shape the future of learners in Cameroon and Central Africa. Our
                commitment to quality ensures that every book we publish meets the highest standards of excellence.
              </p>

              <div className="space-x-4">
                <ButtonLink
                  href="/books"
                  className="group rounded-full hover:scale-110 transition-transform duration-150 ease-in-out h-10 md:h-11 lg:h-12 min-w-[18rem] md:text-base lg:text-lg"
                >
                  Explore our collections
                  <ArrowRight />
                </ButtonLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="absolute top-0 left-6 z-10 h-full hidden lg:flex items-center">
        <HeroCarouselNavigationPrev />
      </div>
      <div className="absolute top-0 right-6 z-10 h-full hidden lg:flex items-center">
        <HeroCarouselNavigationNext />
      </div>
    </Swiper>
  );
};

export default HeroCarousel;
