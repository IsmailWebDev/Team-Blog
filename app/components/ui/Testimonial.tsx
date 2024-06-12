"use client";
import Image from "next/image";
import ReviewCard from "./ReviewCard";
import { useState } from "react";

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 7;

  const goToPrevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(7);
      return;
    }
    if (window.innerWidth >= 768) {
      setCurrentSlide((prevSlide) => (prevSlide <= 3 ? 1 : prevSlide - 3));
      return;
    }
    if (window.innerWidth >= 640) {
      setCurrentSlide((prevSlide) => (prevSlide <= 2 ? 1 : prevSlide - 2));
      return;
    }
    setCurrentSlide((prevSlide) =>
      prevSlide === 1 ? totalSlides - 1 : prevSlide - 1,
    );
  };

  const goToNextSlide = () => {
    if (currentSlide === 7) {
      setCurrentSlide(1);
      return;
    }
    if (window.innerWidth >= 768) {
      setCurrentSlide((prevSlide) =>
        prevSlide >= totalSlides ? 7 : prevSlide + 3,
      );
      return;
    }
    if (window.innerWidth >= 640) {
      setCurrentSlide((prevSlide) =>
        prevSlide >= totalSlides - 1 ? 7 : prevSlide + 2,
      );
      return;
    }
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides ? 1 : prevSlide + 1,
    );
  };

  return (
    <section className="pb-24">
      <div className="mx-auto w-[1440px] max-w-[90%]">
        <h2 className="py-24 text-center text-5xl font-bold leading-[64px] text-darkBlue">
          What people say about Team
        </h2>
      </div>
      <div className="ml-auto w-[1440px] max-w-[90%]">
        <div className="carousel flex w-full items-start gap-4">
          <ReviewCard
            text="Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet."
            name="Chealsea Morgan"
            profession="CEO ot Subway"
            picture="/images/ProfilePic1.png"
            sliderId={1}
          />
          <ReviewCard
            text="In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis."
            name="Nick Cave"
            profession="CMO ot Nokia"
            picture="/images/ProfilePic2.png"
            sliderId={2}
          />
          <ReviewCard
            text="Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo."
            name="Lana Rosenfeld"
            profession="Senior VP ot Pinterest"
            picture="/images/ProfilePic3.png"
            sliderId={3}
          />
          <ReviewCard
            text="Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc."
            name="Giorgio Moroder"
            profession="CTO ot Glovo"
            picture="/images/ProfilePic4.png"
            sliderId={4}
          />
          <ReviewCard
            text="Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc."
            name="Giorgio Moroder"
            profession="CTO ot Glovo"
            picture="/images/ProfilePic4.png"
            sliderId={5}
          />
          <ReviewCard
            text="Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc."
            name="Giorgio Moroder"
            profession="CTO ot Glovo"
            picture="/images/ProfilePic4.png"
            sliderId={6}
          />
          <ReviewCard
            text="Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc."
            name="Giorgio Moroder"
            profession="CTO ot Glovo"
            picture="/images/ProfilePic4.png"
            sliderId={7}
          />
        </div>
      </div>
      <div className="mx-auto w-[1440px] max-w-[90%]">
        <div className="flex justify-end gap-2">
          <a href={`#slide${currentSlide}`} onClick={goToPrevSlide}>
            <Image
              src="images/icons/arrow-left.svg"
              alt="Arrow forward"
              width={32}
              height={32}
            />
          </a>
          <a href={`#slide${currentSlide}`} onClick={goToNextSlide}>
            <Image
              src="images/icons/arrow-right.svg"
              alt="Arrow forward"
              width={32}
              height={32}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
