import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "./CarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import ReviewCard from "./ReviewCard";
import { Review } from "@/app/interfaces/reviews.interface";

type CarouselProps = {
  slides: Review[];
  options?: EmblaOptionsType;
};

export default function Carousel({ slides, options }: CarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <div className="w-[1440px] max-w-[90%]" ref={emblaRef}>
      <div className="flex w-full items-start gap-8">
        {slides.map((review, index) => (
          <ReviewCard
            key={index}
            text={review.text}
            profession={review.profession}
            name={review.name}
            picture={review.picture}
          />
        ))}
      </div>

      <div className="mx-auto w-[1440px] max-w-[90%]">
        <div className="flex justify-end gap-2 max-lg:sm:justify-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}
