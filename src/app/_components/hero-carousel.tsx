"use client";

import React, { useCallback, useEffect } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Fade from "embla-carousel-fade";
import Autoplay from "embla-carousel-autoplay";
import { ButtonLink } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { SMOOTH_DARK_COLOR } from "@/core/constants/colors";
import { NextButton, PrevButton, usePrevNextButtons } from "./hero-carousel-navigation";
import { EmblaCarouselType } from "embla-carousel";

const slides = [
  { image: "slide-1.webp", text: "Text for Slide 1" },
  { image: "slide-2.webp", text: "Text for Slide 2" },
  { image: "slide-3.webp", text: "Text for Slide 3" },
];

const animationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const EmblaCarousel = () => {
  // const [selectedSlide, setSelectedSlide] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [
      Fade(),
      Autoplay({
        delay: 8000,
      }),
    ]
  );

  const onNavigate = useCallback((emblaApi: EmblaCarouselType | undefined) => {
    if (emblaApi && emblaApi.slidesInView().length === 1) {
      // setSelectedSlide(emblaApi.slidesInView()[0]);
    }
  }, []);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    if (emblaApi) emblaApi.on("slidesInView", onNavigate);
  }, [emblaApi, onNavigate]);

  return (
    <div className="embla">
      <div className="embla__viewport overflow-hidden h-[60vh] lg:h-[80vh] relative" ref={emblaRef}>
        <div className="embla__container flex w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={`splide-slide-${index}`}
              className="embla__slide w-full h-full bg-cover bg-center flex-[0_0_100%] min-w-0"
              style={{
                backgroundImage: `
                    linear-gradient(
                        rgba(${SMOOTH_DARK_COLOR.RGB}, 0.7),
                        rgba(${SMOOTH_DARK_COLOR.RGB}, 0.7)
                    ),
                    url('/assets/images/hero-slides/${slide.image}')
                `,
              }}
            >
              <motion.div
                // key={`slide-${selectedSlide}-${selectedSlide === index ? "active" : "standby"}`}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={animationVariants}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="h-full flex flex-col justify-center container text-muted text-center"
              >
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
              </motion.div>
            </div>
          ))}
          {/* </div> */}
        </div>

        <div className="absolute top-0 left-6 z-10 h-full hidden lg:flex items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
        </div>
        <div className="absolute top-0 right-6 z-10 h-full hidden lg:flex items-center">
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
