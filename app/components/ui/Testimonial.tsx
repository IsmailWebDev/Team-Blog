"use client";
import EmblaCarousel from "./Carousel";

export default function Testimonial() {
  const SLIDES = [
    {
      text: "Vestibulum eu quam nec neque pellentesque efficitur id eget nisl. Proin porta est convallis lacus blandit pretium sed non enim. Maecenas lacinia non orci at aliquam. Donec finibus, urna bibendum ultricies laoreet.",
      name: "Chealsea Morgan",
      profession: "CEO ot Subway",
      picture: "/images/ProfilePic1.png",
    },
    {
      text: "In a laoreet purus. Integer turpis quam, laoreet id orci nec, ultrices lacinia nunc. Aliquam erat volutpat. Curabitur fringilla in purus eget egestas. Etiam quis.",
      name: "Nick Cave",
      profession: "CMO ot Nokia",
      picture: "/images/ProfilePic2.png",
    },
    {
      text: "Aliquam pulvinar vestibulum blandit. Donec sed nisl libero. Fusce dignissim luctus sem eu dapibus. Pellentesque vulputate quam a quam volutpat, sed ullamcorper erat commodo.",
      name: "Lana Rosenfeld",
      profession: "Senior VP ot Pinterest",
      picture: "/images/ProfilePic3.png",
    },
    {
      text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
      name: "Giorgio Moroder",
      profession: "CTO ot Glovo",
      picture: "/images/ProfilePic4.png",
    },
    {
      text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
      name: "Giorgio Moroder",
      profession: "CTO ot Glovo",
      picture: "/images/ProfilePic4.png",
    },
    {
      text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
      name: "Giorgio Moroder",
      profession: "CTO ot Glovo",
      picture: "/images/ProfilePic4.png",
    },
    {
      text: "Porta nisl dolor, molestie pellentesque elit molestie in. Morbi metus neque, elementum ullamcorper hendrerit eget, tincidunt et nisi. Sed magna nunc.",
      name: "Giorgio Moroder",
      profession: "CTO ot Glovo",
      picture: "/images/ProfilePic4.png",
    },
  ];

  return (
    <section className="pb-24">
      <div className="mx-auto w-[1440px] max-w-[90%]">
        <h2 className="py-24 text-center text-5xl font-bold leading-[64px] text-darkBlue">
          What people say about Team
        </h2>
      </div>
      <div className="ml-auto w-[1440px] max-w-[90%]">
        <div className="flex w-full items-start gap-4">
          <EmblaCarousel slides={SLIDES} />;
        </div>
      </div>
    </section>
  );
}
