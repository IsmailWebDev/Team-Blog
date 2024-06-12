import Button from "./Button";
import Input from "./Input";
import Navigation from "./Navigation";

export default function Hero() {
  return (
    <div className="min-h-screen bg-hero-pattern-m bg-cover bg-right-top pb-16 lg:bg-hero-pattern">
      <Navigation
        className="pt-12 text-offWhite"
        logo="images/icons/Logo.svg"
        menuLogo="images/icons/menu_24px-white.svg"
      />
      <div className="mx-auto w-[1440px] max-w-[90%] pt-40 text-offWhite lg:pt-52">
        <h1 className="mb-4 max-w-[18ch] text-5xl font-bold leading-[64px]">
          Instant collaboration for remote teams
        </h1>
        <p className="max-w-[36ch] text-lg">
          All-in-one place for your remote team to chat, collaborate and track
          project progress.
        </p>
        <div className="mt-12 flex gap-4 max-sm:flex-col">
          <Input
            type="text"
            placeholder="Email"
            className="border-2 border-[#D1ECFD] bg-offWhite text-gray-800"
            icon="images/icons/arrow_forward_24px-blue.svg"
          />
          <Button className="bg-softBlue text-offWhite">
            Get Early Access
          </Button>
        </div>
      </div>
    </div>
  );
}
