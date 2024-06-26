import Image from "next/image";
export default function SideBySide() {
  return (
    <section className="grid w-[1440px] max-w-full items-center gap-14 py-24 max-lg:items-start sm:grid-cols-2 lg:mx-auto lg:max-w-[90%] lg:gap-36">
      <div className="relative sm:order-1">
        <Image
          src="/images/Image1.png"
          alt="Image1"
          width={565}
          height={565}
          className="w-full max-sm:w-[90%]"
        />
        <Image
          src="/images/Calender.png"
          alt="Calendar"
          width={256}
          height={110}
          className="absolute right-5 top-5 w-40 max-sm:right-20 lg:w-64"
        />
      </div>

      <div className="flex flex-col gap-12 max-lg:mx-auto max-lg:w-[90%] sm:order-2">
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
      <div className="relative sm:order-4">
        <Image
          src="/images/Image2.png"
          alt="Image2"
          width={565}
          height={565}
          className="w-full max-sm:w-[90%]"
        />
        <Image
          src="/images/Sbs2img1.png"
          alt="SBS 2 Image 1"
          width={256}
          height={110}
          className="absolute right-5 w-40 max-lg:top-5 max-sm:right-20 lg:bottom-72 lg:w-64"
        />
        <Image
          src="/images/Sbs2img2.png"
          alt="SBS 2 Image 2"
          width={256}
          height={110}
          className="absolute right-5 w-40 max-lg:top-28 max-sm:right-20 lg:bottom-5 lg:w-64"
        />
      </div>

      <div className="flex flex-col gap-12 max-xl:mx-auto max-lg:w-[90%] sm:order-3 max-lg:sm:max-w-[80%]">
        <h2 className="max-w-[16ch] text-5xl font-bold leading-[64px] text-darkBlue">
          Choose how you want to work
        </h2>
        <p className="max-w-[42ch] text-darkBlue opacity-90">
          In Team, you’ve got all the flexibility to work when, where and how
          it’s best for you. You can easily chat, send audio and video clips, or
          hop on a huddle to talk things out live.
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
      <div className="relative sm:order-5">
        <Image
          src="/images/Image3.png"
          alt="Image3"
          width={565}
          height={565}
          className="w-full max-sm:w-[90%]"
        />
        <Image
          src="/images/Sbs3img1.png"
          alt="SBS 3 Image 1"
          width={256}
          height={110}
          className="absolute bottom-36 left-5 w-40 max-lg:bottom-28 lg:w-64"
        />
        <Image
          src="/images/Sbs3img2.png"
          alt="SBS 3 Image 2"
          width={256}
          height={110}
          className="absolute bottom-5 left-5 w-40 lg:w-64"
        />
      </div>

      <div className="flex flex-col gap-12 max-lg:mx-auto max-lg:w-[90%] sm:order-6">
        <h2 className="max-w-[16ch] text-5xl font-bold leading-[64px] text-darkBlue">
          Move faster with your Team tools
        </h2>
        <p className="max-w-[42ch] text-darkBlue opacity-90">
          With your other work apps connected to Team, you can work faster by
          switching tabs less. And with powerful tools like Workflow Builder,
          you can automate away routine tasks.
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
