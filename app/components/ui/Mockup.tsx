import Image from "next/image";

export default function Mockup() {
  return (
    <section className="w-[1440px] max-w-full items-center gap-14 pt-24 lg:mx-auto lg:grid lg:grid-cols-2">
      <Image
        src="/images/mockup.png"
        alt="Mockup"
        width={1050}
        height={654}
        className="max-w-[800px] translate-x-[15%] max-xl:mb-12 sm:order-1 xl:translate-x-[0%]"
      />
      <div className="flex max-w-[90%] flex-col gap-12 max-xl:mx-auto">
        <h2 className="max-w-[16ch] text-5xl font-bold leading-[64px] text-darkBlue">
          Chats for your distributed teams
        </h2>
        <p className="max-w-[42ch] text-darkBlue opacity-90">
          Team combines the immediacy of real-time chat with an email threading
          model. With Team, you can catch up on important conversations while
          ignoring irrelevant ones.
        </p>
        <div className="flex gap-2">
          <a className="text-softBlue underline" href="#">
            Learn more
          </a>
          <Image
            src="images/icons/arrow_right_alt_24px.svg"
            alt="Image1"
            width={30}
            height={30}
          />
        </div>
      </div>
    </section>
  );
}
